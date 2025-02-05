import {
  Book,
  myLibrary,
  addBookToLibrary,
  displayLibrary,
  removeBookFromLibrary,
} from "./library.js";

document.addEventListener("DOMContentLoaded", () => {
  const newBookBtn = document.getElementById("newBookBtn");
  const bookDialog = document.getElementById("bookDialog");
  const bookForm = document.getElementById("bookForm");
  const closeDialog = document.getElementById("closeDialog");
  const libraryContainer = document.getElementById("libraryContainer");

  // Display the initial library
  displayLibrary();

  // Open the modal when "New Book" is clicked
  newBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
  });

  // Close the modal when "Cancel" is clicked
  closeDialog.addEventListener("click", () => {
    bookDialog.close();
  });

  // Handle form submission
  bookForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    // Add the new book to the library
    addBookToLibrary(title, author, pages, read);

    // Close the modal
    bookDialog.close();

    // Reset the form
    bookForm.reset();
  });
});
