import CirculationService from "./CirculationService";
import { IBorrowTransaction } from "../interfaces/transaction";
import { BorrowModel } from "../models/BorrowModel";

class BorrowService extends CirculationService {
    constructor (transactions: IBorrowTransaction[]) {
        super(transactions);
    }
}

export const borrowService = new BorrowService(BorrowModel);