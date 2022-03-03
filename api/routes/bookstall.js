const bookstall = require('express').Router();

const booksController = require('../controller/bookstallController');

// heartbeat route
bookstall.get('/heartbeat', (req, res) =>{
    console.log('reached heartbeat');
    res.send('Application is live');
});

//Fetch all books
bookstall.get('/books', booksController.getAllBooks );

// Get book by id
bookstall.get('/books/:id', booksController.getBookById);

module.exports = bookstall;