import express, { Request, Response } from 'express';
import Users from '../db/user.db';
// import authMidlleware from '../middleware/auth.will';

class AuthController {
  public async login(req: Request, res: Response): Promise<any> {
    res.status(200).send({ message: 'Login successful' });
    // try {
    //   const { email, password } = req.body;
    //   const user = await User.findOne({ where: { email } });
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }
    //   if (!(await user.comparePassword(password))) {
    //     return res.status(401).json({ message: 'Invalid password' });
    //   }
    //   // if (true) {
    //   //   return res.status(401).json({ message: 'Account is unverified' });
    //   // }
    //   req.body.user = user;
    //   return res.json({ user, token: authMidlleware.generateToken(user.id) });
    // } catch (error) {
    //   res.status(500).json({ message: 'Login failed', error });
    // }
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
