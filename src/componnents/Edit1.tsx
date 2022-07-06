import React from 'react';
import { useParams } from 'react-router-dom';


export const Edit1 =() => {
    const { editId } = useParams();
    alert(`editId???, ${editId}`);
    return <>
        <h1> book </h1>
        
        {/* <p> { books[parseInt(booksIndex) - 1] } </p> */}
    </>
}