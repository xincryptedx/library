//References
const header = document.querySelector(".header");
const addBtn = document.querySelector(".add-btn");
const totalBooksSpan = document.querySelector(".total-books .total");

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
  this.id = this.generateUniqueId();
}

Book.prototype.generateUniqueId = function generateUniqueId() {
  let id;
  do {
    id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
  } while (document.querySelector(`[data-bookid="${id}"]`));
  return id;
};

const exampleBook = new Book({
  title: "The Schools of Arcane Magic",
  author: "Ansirem Runeweaver",
  pages: 248,
  hasRead: true,
});

myLibrary.push(exampleBook);

//Functions
function setTotalBooks() {
  totalBooksSpan.innerHTML = myLibrary.length;
}

function removeBookFromLibrary(book, bookDiv) {
  const bookIndex = myLibrary.indexOf(book);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    bookDiv.remove();
    setTotalBooks();
  }
}

function setBookRead(event, bookId) {
  const book = myLibrary.find((foundBook) => foundBook.id === bookId);
  book.hasRead = event.target.checked;
}

function loadLibrary() {
  setTotalBooks();
  myLibrary.forEach((book) => {
    const bookDiv = document.querySelector(`[data-bookid="${book.id}"]`);
    if (bookDiv) {
      return;
    }

    const newBookDiv = document.createElement("div");
    newBookDiv.classList.add("book");
    newBookDiv.setAttribute("data-bookId", book.id);
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
    newPagesDiv.innerHTML = `Pages: ${book.pages}`;
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
    newHasReadCheckbox.addEventListener("change", (e) =>
      setBookRead(e, book.id)
    );
    newHasReadSwitch.appendChild(newHasReadCheckbox);

    const newHasReadSpan = document.createElement("span");
    newHasReadSpan.classList.add("slider");
    newHasReadSwitch.appendChild(newHasReadSpan);

    const newRemoveButton = document.createElement("button");
    newRemoveButton.classList.add("remove-btn");
    newRemoveButton.innerHTML = "x";
    newBookDiv.appendChild(newRemoveButton);
    newRemoveButton.addEventListener("click", () =>
      removeBookFromLibrary(book, newBookDiv)
    );
  });
}

//Load the library when the page loads
loadLibrary();

function addBookToLibrary(book) {
  myLibrary.push(book);
  loadLibrary();
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
    addForm.reset();
  } else {
    addForm.reportValidity();
  }
});
