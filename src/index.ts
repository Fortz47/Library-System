import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import { config } from 'dotenv';
import { swaggerUi, swaggerSpec } from './swagger';
import systemMiddleware from './middleware';

class App {
  public server;
  protected port: number;

  constructor() {
    config();
    this.port = process.env.PORT ? parseInt(process.env.PORT) : 3333;
    this.server = express();
    this.initializeMiddlewaresAndRoutes();
  }

  private initializeMiddlewaresAndRoutes() {
    this.server.use(express.json());
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    this.server.use(routes);
    this.server.use(morgan('dev'));
  }

  public start() {
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

export const app = new App();
app.start();
