import { AppConfig } from "@/types/app-config";
import App from "../app";

import 'dotenv/config'

const config: AppConfig = {
  modules: [{ name: 'ai', enabled: true, routesPrefix: '/api/v1/ai' }],
  server: {
    port: parseInt(process.env.PORT || '3001'),
    enableCors: true,
    enableHelmet: true,
    enableCompression: true,
    enableLogging: true
  }
};

const app = new App(config);

app.build().then(() => {
  app.listen();
});
