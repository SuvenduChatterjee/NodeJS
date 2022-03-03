const { request, response } = require('express');
const db = require('../config/dbconfig');


//Get all books

const getAllBooks = (request, response) => {
    db.query('select * from bookstall.books', (err, res) => {
        if(err){
            response.status(500).json(err);
        }
        response.status(res.statusCode).json(res.data);
    })
}


// get book by id
const getBookById = (request, response) => {
    db.query(
        `select * from bookstall.books where book_id="${request.params.id}"`,
        (err, res) => {
            if(err){
                response.status(500).json(err);
            }
            response.status(res.statusCode).json(res.data[0]);
        }
    )
}


module.exports = {
    getAllBooks,
    getBookById
}