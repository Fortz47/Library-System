import { Router } from "express";
import { RenewController } from "../controllers/RenewController";


class RenewRoutes extends RenewController {
    private router: Router;

    constructor() {
        super();
        this.router = Router();
        this.initializeRoutes();
    }

    public getRouter() {
        return this.router;
    }

    private initializeRoutes() {
        this.router.get("/transactions", this.getAllTransactions);
        //this.router.get("/transactions/:id", this.getTransactionById);
    }
}

const RenewRouter = new RenewRoutes().getRouter();
export default RenewRouter;