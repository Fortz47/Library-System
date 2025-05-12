# 📘 Circulation Management API (v1)

Base URL: `/api/v1/circulation`

---

## 1. Display all transactions

Gets all transactions without filter

### `GET /api/v1/circulation/transactions`

---

## 📚 2. Borrowing a Book

Issue a book to a user, recording the issue date and due date.

### `POST /api/v1/circulation/borrow`

**Request Body**
```json
{
  "userId": "123",
  "bookId": "abc",
  "issueDate": "2025-04-22",
  "dueDate": "2025-05-06"
}
```

**Success Response**
- **201 Created**
```json
{
  "message": "Book issued successfully",
  "transactionId": "tx123",
  "userId": "123",
  "bookId": "abc",
  "issueDate": "2025-04-22",
  "dueDate": "2025-05-06"
}
```

**Possible Errors**
- `400 Bad Request` – Missing required fields
- `404 Not Found` – User or Book not found
- `409 Conflict` – Book already issued or unavailable

---

## 🔁 3. Returning a Book

Mark a book as returned and update inventory.

### `POST /api/v1/circulation/return`

**Request Body**
```json
{
  "transactionId": "tx123",
  "returnDate": "2025-04-29"
}
```

**Success Response**
- **200 OK**
```json
{
  "message": "Book returned successfully",
  "lateFee": 0
}
```

**Possible Errors**
- `404 Not Found` – Transaction not found
- `400 Bad Request` – Book already returned

---

## 🔄 4. Renewing a Book

Extend the due date for a borrowed book.

### `PUT /api/v1/circulation/renew/:transactionId`

**Request Body**
```json
{
  "newDueDate": "2025-05-13"
}
```

**Success Response**
- **200 OK**
```json
{
  "message": "Book renewed successfully",
  "transactionId": "tx123",
  "newDueDate": "2025-05-13"
}
```

**Possible Errors**
- `404 Not Found` – Transaction not found
- `400 Bad Request` – Not eligible for renewal

---

## 🧾 Status Codes Reference

| Code | Meaning                |
|------|------------------------|
| 200  | OK                     |
| 201  | Created                |
| 400  | Bad Request            |
| 404  | Not Found              |
| 409  | Conflict               |
