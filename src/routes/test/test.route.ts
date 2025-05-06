import { Router } from 'express';
import BooksController from '../../controllers/books.controller';
import systemMiddleware from '../../middleware';

class TestRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.route('/').get();
  }
}

export default new TestRoutes().router;
