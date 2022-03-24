import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BOOK_LIST_URL } from '../constants';

const BookDetailsPage = () => {
 
    const params = useParams();
    const [bookDetails, updateBookDetails] = useState();

    useEffect(() => {
        async function fetchData() {
            console.log('PRINTING params', params);
            const bookDetailsResponse = await fetch(BOOK_LIST_URL + '/' + params.id);
            const bookDetailsJsonData = await bookDetailsResponse.json();
            updateBookDetails(bookDetailsJsonData);
        }
        fetchData();
        
    }, [params])

    return <div>{bookDetails &&
        <div>
            <img src={bookDetails.cover} alt={bookDetails.title} />
            <div>
                <button onClick={() => window.open(bookDetails.website)}>Open Website</button>
                </div>
            </div>
        }</div>
}

export default BookDetailsPage;