import { Router } from 'express';
import AuthController from '../../controllers/auth.controller';

class AuthRoutes extends AuthController {
  public router: Router;

  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    this.router.route('/login').post(this.login);

    // this.router
    //   .route('/register')
    //   .post(systemMiddleware.validateRequestBody(authValidator.register), this.register);
  }
}

export default new AuthRoutes().router;
