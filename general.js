// general.js
// Retrieves all books and their details based on author, title, and ISBN
// Uses async/await with Axios and includes input validation and error handling

const axios = require('axios');
const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("[INFO] Retrieved all books:", response.data);
    return response.data;
  } catch (error) {
    console.error("[ERROR] Could not fetch all books:", error.message);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  if (!isbn) {
    console.error("[ERROR] ISBN is required");
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    console.log(`[INFO] Book data for ISBN "${isbn}":`, response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`[NOT FOUND] No book found with ISBN "${isbn}"`);
    } else {
      console.error(`[ERROR] Failed to fetch book with ISBN "${isbn}":`, error.message);
    }
  }
}

// Get books by Author
async function getBookByAuthor(author) {
  if (!author) {
    console.error("[ERROR] Author name is required");
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(`[INFO] Books by author "${author}":`, response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`[NOT FOUND] No books found for author "${author}"`);
    } else {
      console.error(`[ERROR] Could not fetch books by author "${author}":`, error.message);
    }
  }
}

// Get book by Title
async function getBookByTitle(title) {
  if (!title) {
    console.error("[ERROR] Book title is required");
    return;
  }

  try {
    const response = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(`[INFO] Book with title "${title}":`, response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error(`[NOT FOUND] No book found with title "${title}"`);
    } else {
      console.error(`[ERROR] Could not fetch book with title "${title}":`, error.message);
    }
  }
}

// Export all functions so they can be reused
module.exports = {
  getAllBooks,
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle
};

// OPTIONAL: Test calls (Uncomment to test locally)
/*
getAllBooks();
getBookByISBN("9780451524935");
getBookByAuthor("George Orwell");
getBookByTitle("1984");
*/
