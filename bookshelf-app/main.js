const STORAGE_KEY = "BOOKSHELF_APP";
const SAVED_EVENT = "saved-buku";

let incompleteBooks = [];
let completeBooks = [];

document.addEventListener("DOMContentLoaded", () => {
  loadDataFromStorage(); // Memuat data dari localStorage
  const submitForm = document.getElementById("bookForm");
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addBook();
  });
  renderBooks();
});

function addBook() {
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;
  const book = { id: generateId(), title, author, year, isComplete };
  isComplete ? completeBooks.push(book) : incompleteBooks.push(book);
  saveDataToStorage();
  renderBooks();
  clearForm();
}

function generateId() {
  return +new Date();
}

function renderBooks() {
  renderIncompleteBooks();
  renderCompleteBooks();
}

function renderIncompleteBooks() {
  const incompleteBookList = document.getElementById("incompleteBookList");
  incompleteBookList.innerHTML = "";
  for (const book of incompleteBooks) {
    const bookElement = createBookElement(book);
    incompleteBookList.appendChild(bookElement);
  }
}

function renderCompleteBooks() {
  const completeBookList = document.getElementById("completeBookList");
  completeBookList.innerHTML = "";
  for (const book of completeBooks) {
    const bookElement = createBookElement(book);
    completeBookList.appendChild(bookElement);
  }
}

function createBookElement(book) {
  const bookItem = document.createElement("div");
  bookItem.setAttribute("data-bookid", book.id);
  bookItem.setAttribute("data-testid", "bookItem");

  const titleElement = document.createElement("h3");
  titleElement.setAttribute("data-testid", "bookItemTitle");
  titleElement.innerText = book.title;
  bookItem.appendChild(titleElement);

  const authorElement = document.createElement("p");
  authorElement.setAttribute("data-testid", "bookItemAuthor");
  authorElement.innerText = `Penulis: ${book.author}`;
  bookItem.appendChild(authorElement);

  const yearElement = document.createElement("p");
  yearElement.setAttribute("data-testid", "bookItemYear");
  yearElement.innerText = `Tahun: ${book.year}`;
  bookItem.appendChild(yearElement);

  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("class", "bookItemButtonContainer");

  const completeButton = document.createElement("button");
  completeButton.setAttribute("data-testid", "bookItemIsCompleteButton");
  completeButton.setAttribute("class", "bookCompleteItemButton");
  completeButton.innerText = book.isComplete
    ? "Belum selesai dibaca"
    : "Selesai dibaca";
  completeButton.addEventListener("click", () => toggleComplete(book.id));

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.setAttribute("class", "bookDeleteItemButton");
  deleteButton.innerText = "Hapus Buku";
  deleteButton.addEventListener("click", () => deleteBook(book.id));

  buttonContainer.append(completeButton, deleteButton);
  bookItem.append(titleElement, authorElement, yearElement, buttonContainer);

  return bookItem;
}

function deleteBook(bookId) {
  const index = incompleteBooks.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    incompleteBooks.splice(index, 1);
  } else {
    const completeIndex = completeBooks.findIndex((book) => book.id === bookId);
    if (completeIndex !== -1) {
      completeBooks.splice(completeIndex, 1);
    }
  }
  saveDataToStorage();
  renderBooks();
}

function clearForm() {
  document.getElementById("bookFormTitle").value = "";
  document.getElementById("bookFormAuthor").value = "";
  document.getElementById("bookFormYear").value = "";
  document.getElementById("bookFormIsComplete").checked = false;
}

function saveDataToStorage() {
  const data = { incompleteBooks, completeBooks };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  document.dispatchEvent(new Event(SAVED_EVENT));
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData) {
    const data = JSON.parse(serializedData);
    incompleteBooks = data.incompleteBooks || [];
    completeBooks = data.completeBooks || [];
  }
  incompleteBooks.forEach((book) => {
    book.year = parseInt(book.year);
  });
  completeBooks.forEach((book) => {
    book.year = parseInt(book.year);
  });
}

function renderFilteredBooks(filteredIncompleteBooks, filteredCompleteBooks) {
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of filteredIncompleteBooks) {
    const bookElement = createBookElement(book);
    incompleteBookList.appendChild(bookElement);
  }

  for (const book of filteredCompleteBooks) {
    const bookElement = createBookElement(book);
    completeBookList.appendChild(bookElement);
  }
}

function toggleComplete(bookId) {
  const bookIndex = findBookIndex(bookId, incompleteBooks);
  if (bookIndex !== -1) {
    const [completedBook] = incompleteBooks.splice(bookIndex, 1);
    completedBook.isComplete = true;
    completeBooks.push(completedBook);
  } else {
    const completeBookIndex = findBookIndex(bookId, completeBooks);
    if (completeBookIndex !== -1) {
      const [incompleteBook] = completeBooks.splice(completeBookIndex, 1);
      incompleteBook.isComplete = false;
      incompleteBooks.push(incompleteBook);
    }
  }
  saveDataToStorage();
  renderBooks();
}

function findBookIndex(bookId, bookList) {
  return bookList.findIndex((book) => book.id === bookId);
}

document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});
