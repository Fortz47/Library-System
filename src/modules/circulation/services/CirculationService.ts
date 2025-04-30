import { CirculationModel } from "../models/TransactionModel";
import { ICirculationTransaction } from "../interfaces/circulation";

class CirculationService {
    private transactions: typeof CirculationModel = CirculationModel;

    public getAllTransactions() {
        return this.transactions;
    }

    public getTransactionById(id: number) {
        return this.transactions.find(transaction => transaction.id === id);
    }

    public addTransaction(transaction: ICirculationTransaction) {
        this.transactions.push(transaction);
        return transaction;
    }

    public updateTransaction(id: number, updatedTransaction: Partial<ICirculationTransaction>) {
        // Find the transaction by ID and update it with the new data
        const index = this.transactions.findIndex(transaction => transaction.id === id);
        if (index !== -1) {
            this.transactions[index] = { ...this.transactions[index], ...updatedTransaction };
            return this.transactions[index];
        }
        return null;
    }

    public deleteTransaction(id: number) {
        const index = this.transactions.findIndex(transaction => transaction.id === id);
        if (index !== -1) {
            return this.transactions.splice(index, 1)[0];
        }
        return null;
    }
}

export const circulationService = new CirculationService();