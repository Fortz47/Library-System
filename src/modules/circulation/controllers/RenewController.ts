import { Request, Response } from 'express';
import { renewService } from '../services/RenewService';

export class RenewController {
    public getAllTransactions(req: Request, res: Response) {
        try {
            const transactions = renewService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {  
            res.status(500).json({ message: 'Error fetching transactions', error });
        }
    }
}