import { NextFunction, Request, Response } from 'express';
import BooksService from '../services/books.service';

class BooksController {

  protected async getBooks(req: Request, res: Response, next: NextFunction) {
    try {
      const allBooks = await BooksService.getAllBooks()
      res.status(200).send({
        message: 'books successful',
        ...allBooks
      });
    } catch (error) {
      next(error);
    }
  }

  protected async getBookWithId(req: Request, res: Response, next: NextFunction) {
    try {
      const bookId = parseInt(req.params.id);
      const book = await BooksService.findBook((bookId - 1));
      if(book) {
        res.status(200).send({
          message: 'successful',
          book: book
        });
      } else {
        res.status(404).send({
          message: 'request failed, book not found'
        })
      }  
    } catch (error) {
      next(error);
    }
  }

  protected async InsertBook(req: Request, res: Response, next: NextFunction) {
    try{
      const {
        body: { name, author, pages },
      } = req;
      let insertBook = await BooksService.InsertBook(name, author, pages);
      if(insertBook) {
        res.status(201).send({
          message: 'Book Inserted successfully',
          book: {name, author, pages}
        })
      } else {
        res.status(422).send ({
          message: 'Insertion failed'
        })
      }
    } catch (error) {
      next(error);
    }
  }

}

export default BooksController;
