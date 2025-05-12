import { Request, Response } from 'express';
import { DateTime as dt } from 'luxon';
import { borrowService } from '../services/BorrowService';


export class BorrowController {

    public getAllTransactions(req: Request, res: Response) {
        try {
            const transactions = borrowService.getAllTransactions();
            res.status(200).json(transactions);
        } catch (error) {  
            res.status(500).json({ message: 'Error fetching transactions', error });
        }
    }

    public getTransactionById(req: Request, res: Response) {
        const transactionId = req.params.id;
        try {
            const transaction = borrowService.getTransactionById(+transactionId);
            if (transaction) {
                res.status(200).json(transaction);
            } else {
                res.status(404).json({ message: 'Transaction not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching transaction', error });
        }
    }
    public createTransaction(req: Request, res: Response) {
        const { dueDate, userId, bookId } = req.body;
        const id = borrowService.getAllTransactions.length + 2; 
        const transactionData = {
            id,
            createdAt: dt.now(),
            updatedAt: dt.now(),
            dueDate: dt.fromISO(dueDate),
            userId,
            bookId,
            status: "pending",
        }
        try {
            //@ts-ignore
            const newTransaction = borrowService.addTransaction(transactionData);
            res.status(201).json(newTransaction);
        } catch (error) {
            res.status(500).json({ message: 'Error creating transaction', error });
        }
    }
}