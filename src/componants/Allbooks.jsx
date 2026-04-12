import React, { use } from "react";
import BookCard from "./Bookcard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <section className="container mx-auto px-5 py-10">
      <h2 className="text-2xl font-medium mb-6">All Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
