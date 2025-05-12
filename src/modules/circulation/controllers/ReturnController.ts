import { Request, Response } from 'express';
import { returnService } from '../services/RenturnService';


export class ReturnController {
    public getAllTransactions(req: Request, res: Response) {
        try {
            const transactions = returnService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching transactions', error });
        }
    }
}