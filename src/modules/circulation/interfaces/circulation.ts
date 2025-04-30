export interface ICirculationTransaction {
    id: number;
    transactionType: "borrow" | "return" | "renew";
    transactionId?: number; // Optional for borrow and renew transactions
    transactionDate: Date;
    dueDate: Date;
    userId: string;
    itemId: string;
    status: "active" | "overdue" | "completed" | "cancelled";
    notes?: string;
}
