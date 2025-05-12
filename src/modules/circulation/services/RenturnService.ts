import CirculationService from "./CirculationService";
import { IReturnTransaction } from "../interfaces/transaction";
import { ReturnModel } from "../models/ReturnModel";

class ReturnService extends CirculationService {
    constructor (transactions: IReturnTransaction[]) {
        super(transactions);
    }
}
export const returnService = new ReturnService(ReturnModel);