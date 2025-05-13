import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class AuthenticationMiddleware {
  public async validateUserAccess(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        return res.status(401).json({ message: 'No token provided.' });
      }

      let token: string;

      if (authorization.startsWith('Bearer ')) {
        [, token] = authorization.split(' ');
      } else {
        token = authorization;
      }

      if (!token) {
        return res.status(401).json({ message: 'No token provided.' });
        // throw new BadRequestError('No token provided');
      }

      //   const { payload, expired } = authService.verifyToken(token);

      //   if (expired) {
      //     throw new UnauthorizedError('Please provide a valid token');
      //   }
      return next();
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized access' });
      next(error);
    }
  }

  public generateToken(userEmail: string) {
    return jwt.sign({ userEmail }, 'secret', { expiresIn: '10h' });
  }
}

export default new AuthenticationMiddleware();
