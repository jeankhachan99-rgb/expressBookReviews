// general.js
// This file retrieves all books and their details based on author, title, and ISBN
// using async/await and Axios for asynchronous API requests

const axios = require('axios');
const BASE_URL = "http://localhost:5000";

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/books`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with ISBN ${isbn}:`, error.message);
  }
}

// Get book by Author
async function getBookByAuthor(author) {
  try {
    const response = await axios.get(`${BASE_URL}/books/author/${author}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching books by author ${author}:`, error.message);
  }
}

// Get book by Title
async function getBookByTitle(title) {
  try {
    const response = await axios.get(`${BASE_URL}/books/title/${title}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with title ${title}:`, error.message);
  }
}

// Export all functions
module.exports = {
  getAllBooks,
  getBookByISBN,
  getBookByAuthor,
  getBookByTitle
};
