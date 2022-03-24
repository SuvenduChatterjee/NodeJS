import React, { useEffect, useState } from "react";
import { BOOK_LIST_URL } from "../constants";
import { useHistory } from "react-router-dom";

const BookListPage = () => {

    const [bookList, updateBookList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            const bookListResponse = await fetch(BOOK_LIST_URL);
            const bookListJsonData = await bookListResponse.json();
            updateBookList(bookListJsonData);
        };

        fetchData();
    }, []);

    return <ul className="list-book">
        {bookList.map(book => {
            return <li className="book" key={book.book_id}>
                <h2 className="book-title">{"Title: " + book.title}</h2>
                <p className="book-author">{"Author: " + book.author}</p>
                <img src={book.cover} className="book-thumb" alt={book.title} onClick={() => history.push(`/bookdetails/${book.book_id}`)}></img>
                <p className="book-desc">{book.description}</p>
            </li>
        })}
    </ul>
}

export default BookListPage;