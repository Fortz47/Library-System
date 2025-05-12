import { Itransaction } from "../interfaces/transaction";

class CirculationService {
    private transactions: Itransaction[];

    constructor(transactions: Itransaction[] = []) {
        this.transactions = transactions;
    }

    public getAllTransactions() {
        return this.transactions;
    }

    public getTransactionById(id: number) {
        return this.transactions.find(transaction => transaction.id === id);
    }

    public addTransaction(transaction: Itransaction) {
        this.transactions.push(transaction);
        return transaction;
    }

    public updateTransaction(id: number, updatedTransaction: Partial<Itransaction>) {
        // Find the transaction by ID and update it with the new data
        const index = this.transactions.findIndex(transaction => transaction.id === id);
        if (index !== -1) {
            //@ts-ignore
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

export default CirculationService;