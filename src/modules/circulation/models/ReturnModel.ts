import { IReturnTransaction } from "../interfaces/transaction"

export const ReturnModel: IReturnTransaction[] = [
    {
        id: 1,
        borrowId: 1,
        transactionDate: new Date("2023-10-01"),
        status: "pending",
    },
]