# The Odin Project Library

This is a simple web application to manage a library of books. It allows users to add new books with details such as title, author, pages, status, and rating. The books are displayed on the webpage, and users can remove books from the library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Code Structure](#code-structure)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/matthias-dot-com/Library.git
    ```
2. Navigate to the project directory:
    ```sh
    cd library
    ```
3. Open the `index.html` file in your web browser.

## Usage

1. Click the "Add" button in the header to open the dialog box for adding a new book.
2. Fill out the form with the book's title, author, pages, status, and rating.
3. Click the "Add" button in the form to add the book to the library.
4. The book will be displayed in the main section of the page.
5. To remove a book, click the delete button (represented by an image) on the book's card.

## Features

- Add new books with details (title, author, pages, status, and rating).
- Display books in the main section.
- Remove books from the library.

## Code Structure

### HTML

The HTML file (`index.html`) contains the structure of the webpage, including the header, main section, and the dialog box for adding new books.

### CSS

The CSS file (`style.css`) contains the styling for the webpage, including the layout, colors, and fonts.

### JavaScript

The JavaScript file (`script.js`) contains the functionality for adding and removing books. The main functions and variables are:

- `Library`: An array to store the book objects.
- `Book`: A constructor function to create new book objects.
- `addToLibrary(book)`: A function to add a book to the library and update the DOM.
- Event listeners for the "Add" button, form submission, and dialog close event.
