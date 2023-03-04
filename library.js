//References
const header = document.querySelector(".header");
const addBtn = document.querySelector(".add-btn");

const addFormDiv = document.querySelector(".add-form");
const addForm = document.querySelector(".add-form form");
const titleInput = document.querySelector("input.title");
const authorInput = document.querySelector("input.author");
const pagesInput = document.querySelector("input.pages");
const hasReadInput = document.querySelector("input.has-read");
const closeBtn = document.querySelector(".close-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");

//Constants/Variables
const myLibrary = [];

//Constructors
function Book({ title = "", author = "", pages = 0, hasRead = false }) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

//Functions
function addBookToLibrary(book) {
  myLibrary.push(book);
}

function loadLibrary() {
  //Takes the info in library and displays it on the webpage
}

function showAddForm() {
  addFormDiv.classList.add("show");
  header.classList.add("hide");
}

function closeAddForm() {
  addFormDiv.classList.remove("show");
  header.classList.remove("hide");
}

//Event listeners
addBtn.addEventListener("click", showAddForm);
closeBtn.addEventListener("click", closeAddForm);
submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (addForm.checkValidity()) {
    const newBook = new Book({
      title: titleInput.value,
      author: authorInput.value,
      pages: pagesInput.value,
      hasRead: hasReadInput.checked,
    });
    addBookToLibrary(newBook);
  } else {
    addForm.reportValidity();
  }
});
