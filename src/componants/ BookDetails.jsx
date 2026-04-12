import React, { use } from "react";
import { useParams } from "react-router";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          viewBox="0 0 12 12"
          fill={star <= Math.round(rating) ? "#f59e0b" : "#e5e7eb"}
        >
          <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9.5 3,11 3.5,7.5 1,5 4.5,4.5" />
        </svg>
      ))}
    </div>
    <span className="text-sm font-medium text-gray-700">{rating}</span>
  </div>
);

const BookDetails = () => {
  const { id } = useParams();
  const books = use(booksPromise);
  const book = books.find((book) => book.bookId === Number(id));

  if (!book)
    return <p className="text-center py-20 text-gray-400">Book not found.</p>;

  const {
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    totalPages,
    publisher,
    yearOfPublishing,
    review,
  } = book;

  return (
    <section className="container mx-auto px-5 py-2">
      <div className="bg-white border border-gray-200 rounded overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto">
        <div className="w-full md:w-64 shrink-0 bg-gray-50">
          <img
            src={image}
            alt={bookName}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>

        <div className="flex flex-col flex-1 p-6 gap-4">
          <div>
            <h1 className="text-xl font-medium text-gray-900">{bookName}</h1>
            <p className="text-sm text-gray-500">by {author}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full text-green-700 bg-green-50">
              {category}
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-gray-500 bg-gray-100 border border-gray-200 rounded px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed">{review}</p>

          <div className="border-t border-gray-100" />

          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Publisher</span>
              <span className="text-gray-700 font-medium">{publisher}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Year</span>
              <span className="text-gray-700 font-medium">
                {yearOfPublishing}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Pages</span>
              <span className="text-gray-700 font-medium">{totalPages}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Rating</span>
              <StarRating rating={rating} />
            </div>
          </div>

          <div className="border-t border-gray-100" />

          <div className="flex gap-3 mt-auto">
            <button className="text-sm font-medium px-5 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors">
              Read
            </button>
            <button className="text-sm font-medium px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
