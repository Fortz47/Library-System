import express, { Request, Response, NextFunction } from 'express';
import Users from '../db/user.db';
import authService from '../services/auth/auth.service';
import authMidlleware from '../middleware/auth/auth.middleware';

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
        const data = authService.login(user);
        res.status(200).send({
          message: 'Logged in successful',
          data
        });
      }
    } catch (error) {
      throw new Error(`Error in authenticate create controller method:${error}`);
      next(error);
    }
  }

  public register(req: Request, res: Response, next: NextFunction) {
    try {
      // check if the user exist //
      const userExist = Users.find((user) => user.email === req.body.email);
      // if the user exist throw an error //
      if (userExist) {
        res.status(409).send({ message: 'User already exist' });
      }
      // // create a new user //
      const user = { ...req.body, id: Users.length + 1, isAdmin: false };
      Users.push(user);
      //generate an access token for the new user //
      res.send({ user, token: authMidlleware.generateToken(user.email) });
    } catch (error) {
      res.status(400).send({ message: 'User creation failed', me: 'check your inputs' });
    }
  }
}

export default AuthController;
