//Project Library
// Book constructor
export function Book(title, author, no_of_pages, haveRead) {
  this.title = title;
  this.author = author;
  this.no_of_pages = no_of_pages;
  this.haveRead = haveRead;
}

// Adding the 'toggleReadStatus' method to the Book prototype
Book.prototype.toggleReadStatus = function () {
  this.haveRead = !this.haveRead;
};

// Array to store all book objects
export const myLibrary = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
  new Book("1984", "George Orwell", 328, false),
  new Book("To Kill a Mockingbird", "Harper Lee", 281, true),
];

// Function to add a book to the library
export function addBookToLibrary(title, author, no_of_pages, haveRead) {
  const newBook = new Book(title, author, no_of_pages, haveRead); // Create a new book object
  myLibrary.push(newBook); // Add the new book to the library array
  displayLibrary(); // Refresh the library display
}

// Function to display books in the library
export function displayLibrary() {
  const libraryContainer = document.getElementById("libraryContainer");
  libraryContainer.innerHTML = ""; // Clear the container before re-rendering

  myLibrary.forEach((book, index) => {
    // Create a div for the book card
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index); // Set data-index attribute

    // Create and append book details
    const titleElement = document.createElement("h3");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.classList.add("author");
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = `Pages: ${book.no_of_pages}`;
    bookCard.appendChild(pagesElement);

    const readStatusElement = document.createElement("p");
    readStatusElement.textContent = book.haveRead ? "Read ✅" : "Not Read ❌";
    bookCard.appendChild(readStatusElement);

    // Show toggle read status radio button only for unread books
    if (!book.haveRead) {
      const toggleReadLabel = document.createElement("label");
      toggleReadLabel.textContent = "Update read status";
      toggleReadLabel.classList.add("toggle-read-label");
      const toggleReadRadio = document.createElement("input");
      toggleReadRadio.type = "radio";
      toggleReadRadio.checked = book.haveRead;
      toggleReadRadio.addEventListener("click", () => {
        book.toggleReadStatus();
        displayLibrary(); // Refresh the library display
      });
      toggleReadLabel.appendChild(toggleReadRadio);
      bookCard.appendChild(toggleReadLabel);
    }

    // Create and append remove button
    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Use Font Awesome trash icon
    removeButton.classList.add("remove-icon");
    removeButton.addEventListener("click", () => {
      removeBookFromLibrary(index);
    });
    bookCard.appendChild(removeButton);

    // Append the book card to the library container
    libraryContainer.appendChild(bookCard);
  });
}

// Function to remove a book from the library
export function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1); // Remove the book from the library array
  displayLibrary(); // Refresh the library display
}
