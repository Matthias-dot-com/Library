const booksDiv = document.querySelector(".books");
const button = document.querySelector("input");
const dialog = document.querySelector("dialog");
const add = document.querySelector("#add");
const formInputs = document.querySelectorAll("form input");
const formSelect = document.querySelector("form select");
// // Validation DOM
// const Title = document.querySelector("form [name=\"title\"]");
// const Author = document.querySelector("form [name=\"author\"]")
// const Pages = document.querySelector("form [name=\"pages\"]")
// const Status = document.querySelector("form [name=\"status\"]")
// const Rating = document.querySelector("form [name=\"rating\"]:checked")

class Book {
  constructor(title, author, pages, status, rating) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.rating = rating;
  }

  createBookElement() {
    const book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `
      <p>Title: ${this.title}</p>
      <p>Author: ${this.author}</p>
      <p>Pages: ${this.pages}</p>
      <p>Status: ${this.status}</p>
      <p>Ratings: ${this.rating}</p>
      <div class="controls">
        <button>
          <img src="delete.png" alt="Delete"/>
        </button>
      </div>`;
    booksDiv.appendChild(book);
    book.querySelector(".controls button").addEventListener("click", this.deleteBook.bind(this));
  }

  deleteBook(e) {
    e.stopPropagation();
    const book = e.currentTarget.closest(".book");
    if (book) {
      book.remove();
    }
  }
}

button.addEventListener("click", () => {
  dialog.showModal();
});

add.addEventListener("submit", (event) => {
  event.preventDefault();
  dialog.close();
});

dialog.addEventListener("close", () => {
  const [title, author, pages, rating] = Array.from(formInputs).map(input => input.value);
  const status = formSelect.value;
  const book = new Book(title, author, pages, status, document.querySelector("input[name='rating']:checked")?.value || "");
  book.createBookElement();
  clearFormInputs();
});

function clearFormInputs() {
  formInputs.forEach(input => {
    if (input.type === "text" || input.type === "number") {
      input.value = "";
    } else if (input.type === "radio") {
      input.checked = false;
    }
  });
  formSelect.value ="";
}

