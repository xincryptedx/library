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

const contentDiv = document.querySelector(".content");

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
  myLibrary.forEach((book) => {
    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");
    contentDiv.appendChild(newBookDiv);

    const newTitleDiv = document.createElement("div");
    newTitleDiv.classList.add("title");
    newTitleDiv.innerHTML = book.title;

    newBookDiv.appendChild(newTitleDiv);

    const newAuthorDiv = document.createElement("div");
    newAuthorDiv.classList.add("author");
    newAuthorDiv.innerHTML = book.author;
    newBookDiv.appendChild(newAuthorDiv);

    const newPagesDiv = document.createElement("div");
    newPagesDiv.classList.add("pages");
    newPagesDiv.innerHTML = book.pages;
    newBookDiv.appendChild(newPagesDiv);

    const newHasReadLabel = document.createElement("label");
    /*newHasReadLabel.setAttribute("for", ) not sure how to do this yet bc id's are unique*/
    newHasReadLabel.classList.add("has-read");
    newHasReadLabel.innerHTML = "Read?";
    newBookDiv.appendChild(newHasReadLabel);

    const newHasReadSwitch = document.createElement("label");
    newHasReadSwitch.classList.add("switch");
    newBookDiv.appendChild(newHasReadSwitch);

    const newHasReadCheckbox = document.createElement("input");
    newHasReadCheckbox.classList.add("has-read");
    newHasReadCheckbox.setAttribute("type", "checkbox");
    newHasReadCheckbox.checked = book.hasRead;
    newHasReadSwitch.appendChild(newHasReadCheckbox);

    const newHasReadSpan = document.createElement("span");
    newHasReadSpan.classList.add("slider");
    newHasReadSwitch.appendChild(newHasReadSpan);
  });
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
