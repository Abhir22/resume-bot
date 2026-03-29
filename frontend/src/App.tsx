import { useEffect, useRef, useState } from 'react'
import './App.css'

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1/users'

function App() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'ready' | 'evaluating' | 'done'>(
    'idle'
  )
  const [error, setError] = useState('')
  const [summary, setSummary] = useState('')
  const [score, setScore] = useState<string>('-')
  const [strengths, setStrengths] = useState<string[]>([])
  const [improvements, setImprovements] = useState<string[]>([])
  const [ats, setAts] = useState<string[]>([])

  useEffect(() => {
    if (!file) {
      setStatus('idle')
      setSummary('')
      setScore('-')
      setStrengths([])
      setImprovements([])
      setAts([])
    }
  }, [file])

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selected = event.target.files?.[0] ?? null
    setFile(selected)
    setError('')

    if (selected) {
      setStatus('ready')
      await handleEvaluate(selected)
    } else {
      setStatus('idle')
    }
  }

  const handleEvaluate = async (selectedFile?: File | null) => {
    const targetFile = selectedFile ?? file
    if (!targetFile) {
      setError('Please upload a resume before running the evaluation.')
      return
    }

    setError('')
    setStatus('evaluating')
    setSummary('')
    setScore('-')
    setStrengths([])
    setImprovements([])
    setAts([])

    try {
      const formData = new FormData()
      formData.append('resume', targetFile)

      const response = await fetch(`${API_BASE}/users/ai/evaluate-resume`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.message || 'Failed to evaluate resume')
      }

      const payload = await response.json()
      const result = payload?.data

      setSummary(result?.summary || '')
      setScore(
        typeof result?.score === 'number' ? `${result.score} / 100` : '-'
      )
      setStrengths(Array.isArray(result?.strengths) ? result.strengths : [])
      setImprovements(
        Array.isArray(result?.improvements) ? result.improvements : []
      )
      setAts(Array.isArray(result?.ats) ? result.ats : [])
      setStatus('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error')
      setStatus('ready')
    }
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click()
  }

  const formattedSize = file
    ? `${(file.size / 1024).toFixed(1)} KB`
    : ''

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">RP</span>
          <div>
            <p className="brand-title">Resume Pilot</p>
            <p className="brand-subtitle">AI resume evaluation studio</p>
          </div>
        </div>
        <button className="ghost-button">View sample report</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Upload. Evaluate. Improve.</p>
          <h1>
            Get instant, structured feedback on your resume before you apply.
          </h1>
          <p className="lead">
            Upload a resume file and AI will highlight what is strong, what needs
            fixes, and ATS issues to address.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => handleEvaluate()}>
              Evaluate with AI
            </button>
            <button className="secondary" onClick={handleChooseFile}>
              Upload resume
            </button>
          </div>
          <div className="trust-row">
            <div>
              <strong>1,800+</strong>
              <span>resumes improved</span>
            </div>
            <div>
              <strong>92%</strong>
              <span>ATS match lift</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>average rating</span>
            </div>
          </div>
        </div>

        <div className="hero-panels">
          <div className="upload-card">
            <div className="card-header">
              <div>
                <p className="card-title">Resume upload</p>
                <p className="card-subtitle">PDF or DOCX - Max 10 MB</p>
              </div>
              <span className="status-pill">
                {status === 'evaluating'
                  ? 'Parsing'
                  : status === 'done'
                    ? 'Done'
                    : 'Ready'}
              </span>
            </div>

            <label className="drop-zone">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.docx,.txt"
                onChange={handleFileChange}
              />
              <div className="drop-content">
                <span className="drop-icon">UP</span>
                <div>
                  <p className="drop-title">
                    {file ? file.name : 'Click to upload your resume'}
                  </p>
                  <p className="drop-meta">
                    {file ? formattedSize : 'Drag and drop also works'}
                  </p>
                </div>
              </div>
            </label>

            {error ? <p className="error-text">{error}</p> : null}

            <div className="upload-actions">
              <button className="primary" onClick={() => handleEvaluate()}>
                Evaluate with AI
              </button>
              <button className="link" onClick={handleChooseFile}>
                Replace file
              </button>
            </div>

            <div className="progress">
              <div className={`dot ${status !== 'idle' ? 'active' : ''}`}>
                Upload
              </div>
              <div className={`dot ${status === 'evaluating' ? 'active' : ''}`}>
                Parsing
              </div>
              <div className={`dot ${status === 'done' ? 'active' : ''}`}>
                Feedback
              </div>
            </div>
          </div>

          <div className="feedback-card">
            <div className="card-header">
              <div>
                <p className="card-title">AI feedback</p>
                <p className="card-subtitle">Ready in seconds</p>
              </div>
              <span className="score-pill">{score}</span>
            </div>

            {status === 'evaluating' ? (
              <div className="skeleton">
                <span />
                <span />
                <span />
              </div>
            ) : status === 'done' ? (
              <div className="feedback-grid">
                <div>
                  <p className="section-title">What is good</p>
                  <ul className="insights">
                    {strengths.length === 0 ? (
                      <li>Strong clarity and ownership signals.</li>
                    ) : (
                      strengths.map((item) => <li key={item}>{item}</li>)
                    )}
                  </ul>
                </div>
                <div>
                  <p className="section-title">What to fix</p>
                  <ul className="insights warn">
                    {improvements.length === 0 ? (
                      <li>Add more impact metrics.</li>
                    ) : (
                      improvements.map((item) => <li key={item}>{item}</li>)
                    )}
                  </ul>
                </div>
                <div>
                  <p className="section-title">ATS issues</p>
                  <ul className="insights neutral">
                    {ats.length === 0 ? (
                      <li>Check keyword alignment for the target role.</li>
                    ) : (
                      ats.map((item) => <li key={item}>{item}</li>)
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <p>Upload a resume to see actionable feedback.</p>
              </div>
            )}

            <div className="feedback-footer">
              <div>
                <p className="footer-label">Summary</p>
                <p className="footer-value">
                  {summary || 'Upload a resume to generate a summary.'}
                </p>
              </div>
              <div>
                <p className="footer-label">Focus area</p>
                <p className="footer-value">Impact metrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
