import { IRenewTransaction } from "../interfaces/transaction";

export const RenewModel: IRenewTransaction[] = [
    {
        id: 1,
        borrowId: 1,
        transactionDate: new Date("2023-10-01"),
        dueDate: new Date("2023-10-15"),
        status: "rejected",
        notes: "Item not eligible for renewal",
    },
]