let book = { title: "McBeth", author: "Shakespeare" };
console.log("Book (Author): " + book.title + "(" + book.author + ")");
book.title = "MacBeth";
book.edition = 6;
console.log("Book (Author, Edition): " + book.title + "(" + book.author + ", " + book.edition + ")");
delete book.edition;
console.log("Book (Author, Edition): " + book.title + "(" + book.author + ", " + book.edition + ")");