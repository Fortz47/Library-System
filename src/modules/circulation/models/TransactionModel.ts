import { ICirculationTransaction } from "../interfaces/circulation";

export const CirculationModel: ICirculationTransaction[] = [
    {
        id: 1,
        transactionType: "borrow",
        transactionDate: new Date("2023-10-01"),
        dueDate: new Date("2023-10-15"),
        userId: "user123",
        itemId: "item456",
        status: "active",
        notes: "First-time borrower",
    },
    {
        id: 2,
        transactionType: "return",
        transactionId: 1,
        transactionDate: new Date("2023-10-05"),
        dueDate: new Date("2023-10-15"),
        userId: "user789",
        itemId: "item012",
        status: "completed",
        notes: "Returned in good condition",
    },
]