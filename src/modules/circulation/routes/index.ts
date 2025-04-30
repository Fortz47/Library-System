import {  Router } from 'express';
import CirculationRouter from './circulation';

class Routes {
    private router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    public getRouter() {
        return this.router;
    }

    private initializeRoutes() {
        this.router.use('/circulation', CirculationRouter);
    }
}

const routes = new Routes().getRouter();
export default routes;