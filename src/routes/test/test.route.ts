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
    this.router.route('/').get((req, res) => {
      res.status(200).send({ message: 'Test route is working!' });
    });

    this.router.route('/:userId/books/:bookId').get((req, res) => {
      // Access userId via: req.params.userId
      // Access bookId via: req.params.bookId
      res.send(req.params);
    });
  }
}

export default new TestRoutes().router;
