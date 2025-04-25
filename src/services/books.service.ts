import Books from '../db/books.db';

class BooksService {
  constructor() {}

  public getAllBooks() {
    const books = Books;
    return { books: books};
  }

  public findBook(id: number) {
    if(id > Books.length || id < 0) {
      return false
    }
    const book = Books[id];
    return book;
  }

  public updateBook(id: number, name: string, author: string, pages: number) {
    if(id > Books.length || id < 0) {
      return false
    }
    const book = Books[id];
    book.author = author;
    book.name = name;
    book.pages = pages;
    return book;
  }

  public deleteBook(id: number) {
    if(id > Books.length || id < 0) {
      return false
    }
    const book = Books[id];
    Books.splice(id, 1);
    return book;
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
