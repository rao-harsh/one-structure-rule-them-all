import express, { Application } from 'express';
import { IApp } from '@core/interfaces/IApp';
import { RouterLoader } from '@routes/Router';
import { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

export class App implements IApp {
  private app: Application;

  constructor() {
    this.app = express();
    this.initMiddleware();
    this.initRoutes();
    this.initDatabase();
  }

  initMiddleware(): void {
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  initRoutes(): void {
    const router = new RouterLoader();
    this.app.use('/api', router.load());
  }

  initDatabase(): void {
    // TODO: Implement database initialization
  }

  initServer(): void {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}
