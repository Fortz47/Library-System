import {  Router } from 'express';
import BorrowRouter from './borrow';
import ReturnRouter from './return';
import RenewRouter from './renew';

class Routes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    getRouter() {
        return this.router;
    }

    private initializeRoutes() {
        // Initialize routes for circulation module
        this.router.use('/circulation/borrow', BorrowRouter);
        this.router.use('/circulation/return', ReturnRouter);
        this.router.use('/circulation/renew', RenewRouter);
    }
}

const routes = new Routes().getRouter();
export default routes;