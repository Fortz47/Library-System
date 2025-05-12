import { Router } from "express";
import { ReturnController } from "../controllers/ReturnController";


class ReturnRoutes extends ReturnController {
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

const ReturnRouter = new ReturnRoutes().getRouter();
export default ReturnRouter;