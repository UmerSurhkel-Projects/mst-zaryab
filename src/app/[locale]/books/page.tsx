"use client";
import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import { bookType } from "@/api/Interfaces";
import { useGetBooksQuery } from "@/api/books/BooksExtendedApi";
import SkeletonLoader from "@/components/SkeletonLoader";
import { useTranslations } from 'next-intl';




export default function Books() {
  const [displayedBooks, setDisplayedBooks] = useState<bookType[]>([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const { data, isLoading, isFetching, isSuccess } = useGetBooksQuery({ offset, limit });
  const t = useTranslations();


  useEffect(() => {
    if (isSuccess && data) {
      // Filter out books that are already displayed
      const newBooks = data.filter(book => !displayedBooks.some(displayedBook => displayedBook._id === book._id));
      setDisplayedBooks(prev => [...prev, ...newBooks]);
      setLoadMoreVisible(newBooks.length === limit);
    }
  }, [data, isSuccess, limit]);

  const handleLoadMore = () => {
    setOffset(prev => prev + limit);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="pt-34 py-100">
   
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-0">
          <div className="col-span-10 p-4">
            <div className="container mx-auto">
            <div>
        <h3 className="text-white sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-center uppercase font-black py-30 tracking-wider">{t('Home_page.TITLE')}</h3>
      </div>
              {isLoading || isFetching ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-4">
                  {[...Array(limit)].map((_, index) => (
                    <SkeletonLoader key={index} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-4">
                  {displayedBooks.map((book) => (
                    <BookCard
                      key={book._id}
                      id={book._id}
                      image={book.image}
                      author={book.author}
                      publishDate={new Date(book.publication_date).toLocaleDateString()}
                      name={book.name}
                      description={book.description}
                      price={book.price}
                      language={book.language}
                      category={book.category}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {loadMoreVisible && (
          <div className="flex justify-center mt-8">
            <button
              className="bg-dark hover:bg-lightGreen dark:bg-gray-900 hover:dark:bg-darkHoverBg text-white text-2xl font-bold py-4 px-8 rounded shadow-2xl rounded-lg animate-bounce"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

