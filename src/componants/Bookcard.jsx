import React from "react";
import { Link } from "react-router";

const categoryColors = {
  Classic: "text-green-700 bg-green-50",
  Fiction: "text-violet-700 bg-violet-50",
  Adventure: "text-amber-700 bg-amber-50",
  Romance: "text-pink-700 bg-pink-50",
};

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    tags,
    rating,
    totalPages,
  } = book;

  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="flex bg-white rounded overflow-hidden"
    >
      <div className="w-36 shrink-0 bg-gray-50">
        <img
          src={image}
          alt={bookName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-4 min-w-0">
        <span
          className={`text-[11px] px-2 py-1 rounded-full w-fit ${
            categoryColors[category] || "bg-gray-100 text-gray-600"
          }`}
        >
          {category}
        </span>

        <h3 className="text-sm font-medium text-gray-900 mt-2 leading-snug">
          {bookName}
        </h3>

        <p className="text-xs text-gray-500">{author}</p>

        <div className="flex flex-wrap gap-1 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between border-t mt-3 pt-3">
          <span className="text-sm text-yellow-500">⭐ {rating}</span>
          <span className="text-xs text-gray-400">{totalPages} pages</span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
