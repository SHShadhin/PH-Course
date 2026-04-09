import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      date: '2026-04-01',
      category: 'Frontend',
      content:
        'React is a popular JavaScript library for building user interfaces. It helps you create reusable UI components...',
      image: 'https://i.ibb.co/react-blog.jpg',
    },
    {
      id: 2,
      title: 'Understanding JavaScript Closures',
      author: 'Jane Smith',
      date: '2026-03-28',
      category: 'JavaScript',
      content:
        'Closures are a fundamental concept in JavaScript that allow functions to access variables from their outer scope...',
      image: 'https://i.ibb.co/js-closure.jpg',
    },
    {
      id: 3,
      title: 'Tailwind CSS Tips & Tricks',
      author: 'Alex Johnson',
      date: '2026-03-25',
      category: 'CSS',
      content:
        'Tailwind CSS is a utility-first CSS framework that makes styling faster and easier. Here are some useful tips...',
      image: 'https://i.ibb.co/tailwind-blog.jpg',
    },
    {
      id: 4,
      title: 'Next.js Routing Explained',
      author: 'Emily Brown',
      date: '2026-03-20',
      category: 'Framework',
      content:
        'Next.js provides a powerful file-based routing system. This blog explains how routing works in Next.js...',
      image: 'https://i.ibb.co/nextjs-blog.jpg',
    },
  ];
  return (
    <div>
      <h2 className="text-3xl text-blue-500">This is Blog Page</h2>

      {
        blogs.map(blog => <div key={blog.id}>
          <h2 className='text-2xl font-bold'>{blog.title}</h2>
          <Link href={`/blogs/${blog.id}`}>Show Details</Link>
        </div>)
      
      }
    </div>
  );
};

export default BlogPage;