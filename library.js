//References
const header = document.querySelector(".header");
const addBtn = document.querySelector(".add-btn");
const addForm = document.querySelector(".add-form");
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
  addForm.classList.add("show");
  header.classList.add("hide");
}

function closeAddForm() {
  addForm.classList.remove("show");
  header.classList.remove("hide");
}

//Event listeners
addBtn.addEventListener("click", showAddForm);
closeBtn.addEventListener("click", closeAddForm);
submitBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //Validate input
  //Create object
  //Call addBook
});
