import express from 'express';
import authController from '../../controllers/auth.controller';

const authRouter = express.Router();

const routes = {
  login: '/login',
  register: '/register'
};

authRouter.post(routes.login, authController.login);
//authRouter.post(routes.register, authController.register);

export default authRouter;
