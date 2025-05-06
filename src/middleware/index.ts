import { Request, Response, NextFunction } from 'express';

class SystemMiddleware {
  constructor() {}

  public check(req: Request, res: Response, next: NextFunction) {
    const { method, url } = req;
    console.log(`Application middleware Request Method: ${method}, Request URL: ${url}`);
    next();
  }

  public bookMiddleware(req: Request, res: Response, next: NextFunction) {
    const { method, url } = req;
    console.log(`Book Middleware - Request Method: ${method}, Request URL: ${url}`);
    next();
  }

  public checkBook(req: Request, res: Response, next: NextFunction) {
    const { method, url } = req;
    console.log(`Check Book Middleware - Request Method: ${method}, Request URL: ${url}`);
    next();
  }

  public checkBookId(req: Request, res: Response, next: NextFunction) {
    const { method, url } = req;
    console.log(`Check Book ID Middleware - Request Method: ${method}, Request URL: ${url}`);
    next();
  }
}

const systemMiddleware = new SystemMiddleware();
export default systemMiddleware;
