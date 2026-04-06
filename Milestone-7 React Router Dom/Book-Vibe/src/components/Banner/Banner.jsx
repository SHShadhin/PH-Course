import React from 'react';
import heroImg from '../../assets/hero-book.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 container mx-auto min-h-[70vh]">
      <div className="hero-content flex-col w-full px-20 justify-between lg:flex-row-reverse">
        <img src={heroImg} className="max-w-sm rounded-lg " />
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="btn btn-success text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;