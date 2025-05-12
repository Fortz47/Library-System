import { Router } from "express";
import { BorrowController } from "../controllers/BorrowController";


class BorrowRoutes extends BorrowController {
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
        this.router.get("/transactions/:id", this.getTransactionById);
        this.router.post("/", this.createTransaction);
    }
}

const BorrowRouter = new BorrowRoutes().getRouter();
export default BorrowRouter;