export const dbDesign = {
  User: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },
      email: { type: 'String', maxLength: 255, unique: true, nullable: false },
      name: { type: 'String', maxLength: 100, nullable: true },
      password: { type: 'String', maxLength: 255, nullable: true },
      mobile: { type: 'String', maxLength: 15, unique: true, nullable: true },
      avatar: { type: 'Text', nullable: true },

      githubId: { type: 'String', maxLength: 100, unique: true, nullable: true },
      googleId: { type: 'String', maxLength: 100, unique: true, nullable: true },

      emailVerified: { type: 'Boolean', default: false },
      mobileVerified: { type: 'Boolean', default: false },

      isActive: { type: 'Boolean', default: true },
      lastLoginAt: { type: 'DateTime', nullable: true },

      createdAt: { type: 'DateTime', default: 'now()' },
      updatedAt: { type: 'DateTime', default: 'now()' },
    },
    indexes: [
      { fields: ['email'], name: 'idx_user_email' },
      { fields: ['mobile'], name: 'idx_user_mobile' },
    ],
  },

  Auth: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },

      userId: { type: 'String', nullable: false, unique: true },

      github: { type: 'Boolean', default: false },
      gmail: { type: 'Boolean', default: false },
      email_otp: { type: 'Boolean', default: false },
      is_opted: { type: 'Boolean', default: false },

      createdAt: { type: 'DateTime', default: 'now()' },
    },
    foreignKeys: [
      {
        fields: ['userId'],
        references: { table: 'User', fields: ['id'] },
        onDelete: 'CASCADE',
      },
    ],
  },

  Resume: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },

      userId: { type: 'String', nullable: false },

      filename: { type: 'String', maxLength: 255 },
      feedback: { type: 'Text', nullable: true },

      dataKeep: { type: 'Boolean', default: true },

      createdAt: { type: 'DateTime', default: 'now()' },
    },
    foreignKeys: [
      {
        fields: ['userId'],
        references: { table: 'User', fields: ['id'] },
        onDelete: 'CASCADE',
      },
    ],
  },

  Education: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },

      resumeId: { type: 'String', nullable: false },

      school: { type: 'String', maxLength: 255 },
      degree: { type: 'String', maxLength: 255 },
      field: { type: 'String', maxLength: 255, nullable: true },

      startDate: { type: 'String', maxLength: 50, nullable: true },
      endDate: { type: 'String', maxLength: 50, nullable: true },

      createdAt: { type: 'DateTime', default: 'now()' },
    },
    foreignKeys: [
      {
        fields: ['resumeId'],
        references: { table: 'Resume', fields: ['id'] },
        onDelete: 'CASCADE',
      },
    ],
  },

  Experience: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },

      resumeId: { type: 'String', nullable: false },

      company: { type: 'String', maxLength: 255 },
      role: { type: 'String', maxLength: 255 },
      description: { type: 'Text', nullable: true },

      startDate: { type: 'String', maxLength: 50, nullable: true },
      endDate: { type: 'String', maxLength: 50, nullable: true },

      createdAt: { type: 'DateTime', default: 'now()' },
    },
    foreignKeys: [
      {
        fields: ['resumeId'],
        references: { table: 'Resume', fields: ['id'] },
        onDelete: 'CASCADE',
      },
    ],
  },

  Project: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },

      resumeId: { type: 'String', nullable: false },

      title: { type: 'String', maxLength: 255 },
      description: { type: 'Text', nullable: true },
      techStack: { type: 'String', maxLength: 255, nullable: true },

      createdAt: { type: 'DateTime', default: 'now()' },
    },
    foreignKeys: [
      {
        fields: ['resumeId'],
        references: { table: 'Resume', fields: ['id'] },
        onDelete: 'CASCADE',
      },
    ],
  },

  OTP: {
    columns: {
      id: { type: 'String', primary: true, randomUUID: true, nullable: false },
      email: { type: 'String', maxLength: 255,  nullable: true },
      mobile: { type: 'String', maxLength: 15,  nullable: true },
      code: { type: 'String', maxLength: 10, nullable: false },
      expiresAt: { type: 'DateTime', nullable: false },
      attempts: { type: 'Int', default: 0 },
      createdAt: { type: 'DateTime', default: 'now()' },
      updatedAt: { type: 'DateTime', default: 'now()' },
    },
    indexes: [
      { fields: ['email'], name: 'idx_otp_email' },
      { fields: ['mobile'], name: 'idx_otp_mobile' },
    ],
  },
};