import { Request, Response } from 'express';
import { circulationService } from '../services/CirculationService';

export class CirculationController {
    public getAllTransactions(req: Request, res: Response) {
        try {
            const transactions = circulationService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {  
            res.status(500).json({ message: 'Error fetching transactions', error });
        }
    }
}