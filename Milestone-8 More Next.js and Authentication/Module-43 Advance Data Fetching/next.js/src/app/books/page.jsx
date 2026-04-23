import BookCard from '@/components/BookCard';
import React from 'react';

const BooksPage = async() => {
  const res = await fetch('http://localhost:5000/books', {next: {revalidate: 9}});
  const books = await res.json()
  return (

    <div>
      <h2>Books {books.length} </h2>
      <div className='grid grid-cols-3 gap-5 mx-10'>
        {
          books.map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default BooksPage;