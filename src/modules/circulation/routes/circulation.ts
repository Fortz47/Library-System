import { Router } from "express";
import { CirculationController } from "../controllers/CirculationController";


class CirculationRoutes extends CirculationController {
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
        // circulationRouter.post("/transactions", this.createTransaction);
        // circulationRouter.put("/transactions/:id", this.updateTransaction);
        // circulationRouter.delete("/transactions/:id", this.deleteTransaction);
    }
}

const CirculationRouter = new CirculationRoutes().getRouter();
export default CirculationRouter;