// export const generateStaticParams = async () => {
//   const res = await fetch('http://localhost:5000/books');
//   const books = await res.json();
//   return books.slice(0, 3).map(book=> ({bookId: book.id}))
// }

export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/books');
  const books = await res.json();
  return books.slice(1,3).map(book=> ({bookId: book.id}))
}
const BookDetailsPage = async({ params }) => {
  const { bookId } = await params;
  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const { title, author, price } = await res.json();
  return (
    <div>
      <h2>Book Details: {bookId}</h2>
      <h1>Name: {title} </h1>
      <h1>Author: {author} </h1>
      <h1>Price: ${price} </h1>
    </div>
  );
};

export default BookDetailsPage;