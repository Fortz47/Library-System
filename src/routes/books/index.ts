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
    /**
     * @swagger
     * /books:
     *   get:
     *     summary: Get all books
     *     description: Returns a list of all books
     *     responses:
     *       200:
     *       description: A list of books
     */
    this.router
      .route('/')
      .get(
        this.getBooks
      );
      
      /**
       * @swagger
       * /books/:
       *   post:
       *     summary: Add a new book to the library
       *     description: Adds a new book to the list of books in the library.
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             type: object
       *             required:
       *               - name
       *               - author
       *               - pages
       *             properties:
       *               name:
       *                 type: string
       *                 example: The Great Gatsby
       *               author:
       *                 type: string
       *                 example: F. Scott Fitzgerald
       *               pages:
       *                 type: integer
       *                 example: 180
       *     responses:
       *       200:
       *         description: Book added successfully
       *         content:
       *           application/json:
       *             schema:
       *               type: object
       *               properties:
       *                 message:
       *                   type: string
       *                   example: Book added successfully
       *                 book:
       *                   type: object
       *                   properties:
       *                     name:
       *                       type: string
       *                     author:
       *                       type: string
       *                     pages:
       *                       type: integer
       */
      this.router
      .route('/')
      .post(
        this.InsertBook
      );

      /**
       * @swagger
       * /books/{id}:
       *   get:
       *     summary: Get a specific book by ID
       *     description: Retrieves a book from the library using its unique ID.
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the book to retrieve
       *         schema:
       *           type: integer
       *           example: 12
       *     responses:
       *       200:
       *         description: Book found and returned successfully
       *         content:
       *           application/json:
       *             schema:
       *               type: object
       *               properties:
       *                 name:
       *                   type: string
       *                   example: The Great Gatsby
       *                 author:
       *                   type: string
       *                   example: F. Scott Fitzgerald
       *                 pages:
       *                   type: integer
       *                   example: 180
       *       404:
       *         description: Book not found
       */
      this.router
      .route('/:id')
      .get(
        this.getBookWithId
      );

      /**
       * @swagger
       * /books/{id}:
       *   delete:
       *     summary: Delete a book by ID
       *     description: Removes a book from the library using its unique ID.
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the book to delete
       *         schema:
       *           type: integer
       *           example: 12
       *     responses:
       *       200:
       *         description: Book deleted successfully
       *         content:
       *           application/json:
       *             schema:
       *               type: object
       *               properties:
       *                 message:
       *                   type: string
       *                   example: Book deleted successfully
       *       404:
       *         description: Book not found
       */
      this.router
      .route('/:id')
      .delete(
        this.deleteBook
      );

      /**
       * @swagger
       * /books/{id}:
       *   put:
       *     summary: Update a book by ID
       *     description: Updates the details of an existing book using its unique ID.
       *     parameters:
       *       - in: path
       *         name: id
       *         required: true
       *         description: ID of the book to update
       *         schema:
       *           type: integer
       *           example: 12
       *     requestBody:
       *       required: true
       *       content:
       *         application/json:
       *           schema:
       *             type: object
       *             properties:
       *               name:
       *                 type: string
       *                 example: The Great Gatsby
       *               author:
       *                 type: string
       *                 example: F. Scott Fitzgerald
       *               pages:
       *                 type: integer
       *                 example: 200
       *     responses:
       *       200:
       *         description: Book updated successfully
       *         content:
       *           application/json:
       *             schema:
       *               type: object
       *               properties:
       *                 message:
       *                   type: string
       *                   example: Book updated successfully
       *                 book:
       *                   type: object
       *                   properties:
       *                     name:
       *                       type: string
       *                     author:
       *                       type: string
       *                     pages:
       *                       type: integer
       *       404:
       *         description: Book not found
       */
      this.router
      .route('/:id')
      .put(
        this.updateBook
      );
  }
}

export default new BooksRoutes().router;
