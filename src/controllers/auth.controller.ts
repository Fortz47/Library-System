import express, { Request, Response, NextFunction } from 'express';
import Users from '../db/user.db';
import authService from '../services/auth/auth.service';
// import authMidlleware from '../middleware/auth.will';

class AuthController {
  protected async login(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        body: { email, password }
      } = req;

      const userPasswordCheck = authService.checkUserExistAndPasswordMatch(email, password);
      // res.status(200).send({ message: 'just checking' });
      if (userPasswordCheck) {
        res.status(401).send({
          messager: userPasswordCheck
        });
      } else {
        const user = authService.getUserForLogin(email, password);
        res.status(200).send({ messageeme: user });
        // const data = await authService.login(user);
        // res.status(200).send({
        //   message: 'Logged in successful',
        //   data
        // });
      }
    } catch (error) {
      throw new Error(`Error in authenticate create controller method:${error}`);
      next(error);
    }
  }

  //   public async register(req: Request, res: Response): Promise<any> {
  //     try {
  //       let { firstName, lastName, email, password } = req.body;
  //       const user = await User.create({ firstName, lastName, email, password });
  //       return res.json({ user, token: authMidlleware.generateToken(user.id) });
  //     } catch (error) {
  //       return res.status(400).json({ message: 'User creation failed', me: 'check your inputs' });
  //     }
  //   }
}

export default AuthController;
