/* Create an object called Library with the following properties and methods:

Properties:

name: Name of the library.
books: An array to store book objects.

Methods:

addBook(book): Accepts a book object as an argument and adds it to the books array.
listBooks(): Prints the details of all the books in the library.
findBook(title): Accepts a book title as an argument and returns the book object if found, or null if not found.
removeBook(title): Accepts a book title as an argument and removes the book from the books array if found.
Create a few book objects with properties like title, author, and genre,
 and demonstrate the usage of the Library methods.*/

let Library = {
    name: "Goku's Library",
    books: [],

    addBook (book){
        this.books.push(book)
    },

    listBooks(){
        console.log("Books in the library:");
        this.books.forEach(book => {
        console.log(`${book.title} by ${book.author}`)
        })
    },

    findBook(title){
        return this.books.find(book => book.title === title) || null
    },

    removeBook(title){
        let index = this.books.findIndex(book => book.title === title)
        if(index != -1){
            this.books.splice(index,1)
            console.log(`${title} is removed successfully`);
        }else{
            console.log(`${title} is not found in the library `);
        }
    },
}

let book1 = {title:"Titanic", author:"James Cameron", genre:"romance"}
let book2 = {title:"Batman", author:"Christopher Nolan", genre:"fiction"}

Library.addBook(book1);
Library.addBook(book2);

Library.listBooks()

let foundbook = Library.findBook("Batman")
console.log("Book found",foundbook);

Library.removeBook("Batman")
Library.listBooks()


