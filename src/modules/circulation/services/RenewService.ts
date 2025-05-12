import CirculationService from "./CirculationService";
import { IRenewTransaction } from "../interfaces/transaction";
import { RenewModel } from "../models/RenewModel";

class RenewService extends CirculationService {
    constructor (transactions: IRenewTransaction[]) {
        super(transactions);
    }
}

export const renewService = new RenewService(RenewModel);