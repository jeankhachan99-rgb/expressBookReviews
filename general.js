const axios = require("axios");
const BASE_URL = "http://localhost:5000/books";

async function getAllBooks() {
  try {
    const res = await axios.get(BASE_URL);
    console.log("All Books:", res.data);
  } catch (err) {
    console.error("Error fetching all books:", err.message);
  }
}

async function getBookByISBN(isbn) {
  try {
    const res = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log("Book by ISBN:", res.data);
  } catch (err) {
    console.error("Error fetching book by ISBN:", err.message);
  }
}

async function getBookByAuthor(author) {
  try {
    const res = await axios.get(`${BASE_URL}/author/${author}`);
    console.log("Book by Author:", res.data);
  } catch (err) {
    console.error("Error fetching book by author:", err.message);
  }
}

async function getBookByTitle(title) {
  try {
    const res = await axios.get(`${BASE_URL}/title/${title}`);
    console.log("Book by Title:", res.data);
  } catch (err) {
    console.error("Error fetching book by title:", err.message);
  }
}

// Example function calls
getAllBooks();
getBookByISBN("9780451524935");
getBookByAuthor("Harper%20Lee");
getBookByTitle("1984");
