import { Router, Request, Response } from 'express';
import BooksRoute from './books';

class Routes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', (req: Request, res: Response) => {
      res.status(200).json({
        message: 'Welcome to my Library System Clone',
        data: {
          version: '1.0.0',
        },
      });
    });
    this.router.use('/books', BooksRoute);
  }
}

export default new Routes().router;
