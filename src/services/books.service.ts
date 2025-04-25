import Books from '../db/books.db';

class BooksService {
  constructor() {}

  public getAllBooks() {
    const books = Books;
    return { books: books};
  }

  public InsertBook(name: string, author: string, pages: number) {
    const lengthOfBook = Books.length;
    const newBook = {
        id: lengthOfBook + 1,
        name,
        author,
        pages
    }
    let insertBook = Books.push(newBook);
    if(insertBook) {
        return true
    }
    return false;
  }
}

export default new BooksService();
