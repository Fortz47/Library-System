import { Router } from 'express';
import BooksController from '../../controllers/books.controller';

class BooksRoutes extends BooksController {
  public router: Router;

  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router
      .route('/')
      .get(
        this.getBooks
      );

      this.router
      .route('/')
      .post(
        this.InsertBook
      );
  }
}

export default new BooksRoutes().router;
