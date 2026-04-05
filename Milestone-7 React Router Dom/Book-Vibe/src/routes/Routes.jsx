import { Component } from "react";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/books/Books";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,

    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: '/books',
        element: <Books></Books>,
      },
    ],
  },
]);
