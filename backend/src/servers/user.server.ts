import { AppConfig } from "@/types/app-config";
import App from "../app";

import 'dotenv/config'

const config: AppConfig = {
  modules: [{ name: 'user', enabled: true, routesPrefix: '/api/v1/user' },,
    { name: 'users', enabled: true, routesPrefix: '/api/v1/users' }],
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