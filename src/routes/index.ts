import { Router, Request, Response } from 'express';
import BooksRoute from './books';
import testRoute from './test/test.route';
import authRoute from './auth';

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
          version: '1.0.0'
        }
      });
    });
    // this.router.use([
    //   systemMiddleware.bookMiddleware,
    //   systemMiddleware.checkBook,
    //   systemMiddleware.checkBookId
    // ]);
    this.router.use('/books', BooksRoute);
    this.router.use('/test', testRoute);
    this.router.use('/auth', authRoute);
  }
}

export default new Routes().router;
