import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({book}) => {
  return (
    <div className="card bg-white p-5 shadow-sm">
      <figure className="bg-gray-200 p-8 rounded-xl">
        <img className="max-w-[200px]" src={book.image} />
      </figure>
      <div className="card-body">
        <div className="flex gap-3">
          {book.tags.map((tag, index) => (
            <div key={index} className="badge text-green-400 bg-green-100 font-bold">
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl ">{book.bookName}</h2>
        <h2 className="text-xl">{book.author}</h2>
        <div className="card-actions justify-between border-t border-dashed border-gray-400 pt-5">
          <div className="text-xl">{book.category}</div>
          <div className="text-xl flex items-center gap-2">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;