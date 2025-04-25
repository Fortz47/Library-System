Library System Documentation
 1.0.0 
OAS 3.0
This is the documentation for the Library System API

Servers

http://localhost:3333
default


GET
/books/
Get all books

Returns a list of all books

Parameters
Cancel
No parameters

Execute
Clear
Responses
Curl

curl -X 'GET' \
  'http://localhost:3333/books/' \
  -H 'accept: application/json'
Request URL
http://localhost:3333/books/
Server response
Code	Details
200	
Response body
Download
{
  "message": "books successful",
  "books": [
    {
      "id": 1,
      "name": "Think Big",
      "author": "Ben Carson",
      "pages": 345
    },
    {
      "id": 2,
      "name": "The Broke Millenienial",
      "author": "Cag Joy",
      "pages": 367
    },
    {
      "id": 3,
      "name": "Think Big",
      "author": "Ben Carson",
      "pages": 125
    }
  ]
}
Response headers
 connection: keep-alive 
 content-length: 236 
 content-type: application/json; charset=utf-8 
 date: Fri,25 Apr 2025 10:49:16 GMT 
 etag: W/"ec-GFvs8HRjBpyIFz6oUCW690XRv1o" 
 keep-alive: timeout=5 
 x-powered-by: Express 
Responses
Code	Description	Links
200	
Books returned successfully

Media type

application/json
Controls Accept header.
Example Value
Schema
"Unknown Type: object[]"
No links

POST
/books/
Add a new book to the library

Adds a new book to the list of books in the library.

Parameters
Try it out
No parameters

Request body

application/json
Example Value
Schema
{
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "pages": 180
}
Responses
Code	Description	Links
201	
Book added successfully

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "message": "Book added successfully",
  "book": {
    "name": "string",
    "author": "string",
    "pages": 0
  }
}
No links

GET
/books/{id}
Get a specific book by ID

Retrieves a book from the library using its unique ID.

Parameters
Try it out
Name	Description
id *
integer
(path)
ID of the book to retrieve

12
Responses
Code	Description	Links
200	
Book found and returned successfully

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "pages": 180
}
No links
404	
Book not found

No links

DELETE
/books/{id}
Delete a book by ID

Removes a book from the library using its unique ID.

Parameters
Try it out
Name	Description
id *
integer
(path)
ID of the book to delete

12
Responses
Code	Description	Links
200	
Book deleted successfully

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "message": "Book deleted successfully"
}
No links
404	
Book not found

No links

PUT
/books/{id}
Update a book by ID

Updates the details of an existing book using its unique ID.

Parameters
Try it out
Name	Description
id *
integer
(path)
ID of the book to update

12
Request body

application/json
Example Value
Schema
{
  "name": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "pages": 200
}
Responses
Code	Description	Links
200	
Book updated successfully

Media type

application/json
Controls Accept header.
Example Value
Schema
{
  "message": "Book updated successfully",
  "book": {
    "name": "string",
    "author": "string",
    "pages": 0
  }
}
No links
404	
Book not found