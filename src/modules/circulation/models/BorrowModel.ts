import { DateTime as dt } from 'luxon'
import { IBorrowTransaction } from "../interfaces/transaction"


export const BorrowModel: IBorrowTransaction[] = [
    {
        id: 1,
        createdAt: dt.fromObject({year: 2023, month: 10, day: 1}),
        updatedAt: dt.fromObject({year: 2023, month: 10, day: 1}),
        dueDate: dt.fromISO("2023-10-15"),
        userId: "user123",
        bookId: "item456",
        status: "active",
        notes: "First-time borrower",
    },
]