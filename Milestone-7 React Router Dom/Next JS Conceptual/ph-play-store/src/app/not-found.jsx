import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="bg-gray-950 flex-col h-screen flex items-center justify-center">
      <h2 className="text-5xl text-red-400 ">Page Not Found!</h2>
      <Link href={'/'}>
        <button className="btn btn-accent mt-5">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;