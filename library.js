const myLibrary = [];

function Book({title = '', author = '', pages = 0, hasRead = false}) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function loadLibrary() {
    //Takes the info in library and displays it on the webpage
}