import { DateTime } from "luxon";

export interface IBorrowTransaction {
    id: number;
    createdAt: DateTime;
    updatedAt: DateTime;
    dueDate: DateTime;
    userId: string;
    bookId: string;
    status: "active" | "overdue" | "completed" | "cancelled";
    notes?: string;
}

export interface IRenewTransaction {
    id: number;
    borrowId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
    dueDate: DateTime;
    status: "accepted" | "rejected" | "pending";
    notes?: string;
}

export interface IReturnTransaction {
    id: number;
    borrowId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
    status: "completed" | "cancelled" | "pending";
    notes?: string;
}

export type Itransaction = IBorrowTransaction | IReturnTransaction | IRenewTransaction;

// interface borrowTransactionDTO {

// }