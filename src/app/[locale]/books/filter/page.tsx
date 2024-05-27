// 'use client'
// import React, { useState, useEffect } from "react";
// import BookCard from "@/components/BookCard";
// import { bookType } from "@/api/Interfaces";
// import { useGetBooksQuery } from "@/api/books/BooksExtendedApi";
// import Select, { MultiValue } from 'react-select';
// import SearchForm from "@/components/SearchForm";
// import SkeletonLoader from "@/components/SkeletonLoader";
// import { format, isValid } from 'date-fns';
// import Link from "next/link";

// interface OptionType {
//     value: string;
//     label: string;
// }

// interface Filters {
//     name: string;
//     author: string;
//     category: MultiValue<OptionType>;
//     language: MultiValue<OptionType>;
//     publishDate: Date | null;
// }

// const FilterModal = () => {
//     const [allBooks, setAllBooks] = useState<bookType[]>([]);
//     const [displayedBooks, setDisplayedBooks] = useState<bookType[]>([]);
//     const [filteredBooks, setFilteredBooks] = useState<bookType[]>([]);
//     const [loadMoreVisible, setLoadMoreVisible] = useState(true);
//     const [limit, setLimit] = useState(6);
//     const [offset, setOffset] = useState(0);
//     const [filters, setFilters] = useState<Filters>({
//         name: "",
//         author: "",
//         category: [],
//         language: [],
//         publishDate: null,
//     });
//     const { data, isLoading, isFetching, isSuccess } = useGetBooksQuery({ limit: 1000 });

//     const [minPrice, setMinPrice] = useState<string>("");
//     const [maxPrice, setMaxPrice] = useState<string>("");

//     useEffect(() => {
//         if (data) {
//             setAllBooks(data);
//             setFilteredBooks(data);
//             paginate(data, 0);
//         }
//     }, [data]);

//     const handleLoadMore = () => {
//         setOffset(prev => prev + limit);
//         paginate(filteredBooks, offset + limit);
//     };
//     const applyFilters = (books: bookType[]) => {
//         const filtered = books.filter(book => {
//             let bookDate = '';
//             let filterDate = '';

//             if (isValid(new Date(book.publication_date))) {
//                 bookDate = format(new Date(book.publication_date), 'MM-dd-yyyy');
//             }

//             if (filters.publishDate && isValid(filters.publishDate)) {
//                 filterDate = format(filters.publishDate, 'MM-dd-yyyy');
//             }

//             const publishDateMatch = !filters.publishDate || bookDate === filterDate;
//             const categoryMatch = !filters.category.length || filters.category.some(category => category.value === book.category?.id);
//             const languageMatch = !filters.language.length || filters.language.some(language => language.label.toLowerCase() === book.language.toLowerCase());

//             return (
//                 book.name.toLowerCase().includes(filters.name.toLowerCase()) &&
//                 book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
//                 categoryMatch &&
//                 languageMatch &&
//                 // book.language.toLowerCase().includes(filters.language.toLowerCase()) &&
//                 publishDateMatch &&
//                 (minPrice === "" || book.price >= parseFloat(minPrice)) &&
//                 (maxPrice === "" || book.price <= parseFloat(maxPrice))
//             );
//         });
//         setFilteredBooks(filtered);
//         paginate(filtered, 0);
//     };

//     const paginate = (books: bookType[], start: number) => {
//         const paginatedBooks = books.slice(0, start + limit);
//         setDisplayedBooks(paginatedBooks);
//         setLoadMoreVisible(start + limit < books.length);
//     };

//     const handleFilterChange = (filterName: keyof Filters, value: any) => {
//         setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
//     };

//     const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         setOffset(0);
//         applyFilters(allBooks);
//     };

//     const handleReset = () => {
//         setFilters({
//             name: "",
//             author: "",
//             category: [],
//             language: [],
//             publishDate: null,
//         });
//         setMinPrice("");
//         setMaxPrice("");
//         setOffset(0);
//         setFilteredBooks(allBooks);
//         paginate(allBooks, 0);
//     };

//     const handleMaxPriceChange = (value: string) => {
//         if (/^\d*$/.test(value)) {
//             setMaxPrice(value);
//         }
//     };

//     const handleMinPriceChange = (value: string) => {
//         if (/^\d*$/.test(value)) {
//             setMinPrice(value);
//         }
//     };

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (['e', 'E', '+', '-', '.'].includes(e.key)) {
//             e.preventDefault();
//         }
//     };

//     useEffect(() => {
//         console.log("Filters updated:", filters);
//         console.log("Filtered books:", filteredBooks);
//     }, [filters, filteredBooks]);

//     useEffect(() => {
//         if (filteredBooks.length === 0) {
//             console.log("No books found with the current filters.");
//         }
//     }, [filteredBooks]);

//     return (
//         <section className="pt-180">
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-12 gap-4">
//                     <div className=" col-span-12  sm:col-span-12  md:col-span-5 lg:col-span-3  xl:col-span-3 p-4">
//                         <SearchForm
//                             filters={filters}
//                             onFilterChange={handleFilterChange}
//                             onSubmit={handleSearch}
//                             onReset={handleReset}
//                             onMinPriceChange={handleMinPriceChange}
//                             onMaxPriceChange={handleMaxPriceChange}
//                             minPrice={minPrice}
//                             maxPrice={maxPrice}
//                             onKeyDown={handleKeyDown}

//                         />
//                     </div>
//                     <div className="col-span-12  sm:col-span-12  md:col-span-7  lg:col-span-7  xl:col-span-9 p-4">
//                         <div className="">

//                             {isLoading ? (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3  gap-4">
//                                     {[...Array(limit)].map((_, index) => (
//                                         <SkeletonLoader key={index} />
//                                     ))}
//                                 </div>
//                             ) : (
//                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
//                                     {displayedBooks.map((book) => (
//                                         <BookCard
//                                             key={book._id}
//                                             id={book._id}
//                                             image={book.image}
//                                             author={book.author}
//                                             publishDate={new Date(book.publication_date).toLocaleDateString()}
//                                             name={book.name}
//                                             description={book.description}
//                                             price={book.price}
//                                             language={book.language}
//                                             category={book.category}
//                                         />
//                                     ))}
//                                 </div>
//                             )}
//                             {loadMoreVisible && displayedBooks.length !== 0 && (
//                                 <div className="flex justify-center mt-8">
//                                     <button
//                                         className="bg-dark hover:bg-lightGreen dark:bg-gray-900 hover:dark:bg-darkHoverBg text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-2xl animate-bounce"
//                                         onClick={handleLoadMore}
//                                     >
//                                         Load More
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FilterModal;



'use client'
import React, { useState, useEffect } from "react";
import BookCard from "@/components/BookCard";
import { bookType } from "@/api/Interfaces";
import { useGetBooksQuery } from "@/api/books/BooksExtendedApi";
import Select, { MultiValue } from 'react-select';
import SearchForm from "@/components/SearchForm";
import SkeletonLoader from "@/components/SkeletonLoader";
import { format, isValid } from 'date-fns';
import Link from "next/link";

interface OptionType {
    value: string;
    label: string;
}

interface Filters {
    name: string;
    author: string;
    category: MultiValue<OptionType>;
    language: MultiValue<OptionType>;
    publishDate: Date | null;
}

const FilterModal = () => {
    const [allBooks, setAllBooks] = useState<bookType[]>([]);
    const [displayedBooks, setDisplayedBooks] = useState<bookType[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<bookType[]>([]);
    const [loadMoreVisible, setLoadMoreVisible] = useState(true);
    const [limit, setLimit] = useState(6);
    const [offset, setOffset] = useState(0);
    const [filters, setFilters] = useState<Filters>({
        name: "",
        author: "",
        category: [],
        language: [],
        publishDate: null,
    });
    const { data, isLoading, isFetching, isSuccess } = useGetBooksQuery({ limit: 1000 });
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);


    const [minPrice, setMinPrice] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<string>("");

    useEffect(() => {
        if (data) {
            setAllBooks(data);
            setFilteredBooks(data);
            paginate(data, 0);
        }
    }, [data]);

    const handleLoadMore = () => {
        setOffset(prev => prev + limit);
        paginate(filteredBooks, offset + limit);
    };
    const applyFilters = (books: bookType[]) => {
        const filtered = books.filter(book => {
            let bookDate = '';
            let filterDate = '';

            if (isValid(new Date(book.publication_date))) {
                bookDate = format(new Date(book.publication_date), 'MM-dd-yyyy');
            }

            if (filters.publishDate && isValid(filters.publishDate)) {
                filterDate = format(filters.publishDate, 'MM-dd-yyyy');
            }

            const publishDateMatch = !filters.publishDate || bookDate === filterDate;
            const categoryMatch = !filters.category.length || filters.category.some(category => category.value === book.category?.id);
            const languageMatch = !filters.language.length || filters.language.some(language => language.label.toLowerCase() === book.language.toLowerCase());

            return (
                book.name.toLowerCase().includes(filters.name.toLowerCase()) &&
                book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
                categoryMatch &&
                languageMatch &&
                // book.language.toLowerCase().includes(filters.language.toLowerCase()) &&
                publishDateMatch &&
                (minPrice === "" || book.price >= parseFloat(minPrice)) &&
                (maxPrice === "" || book.price <= parseFloat(maxPrice))
            );
        });
        setFilteredBooks(filtered);
        paginate(filtered, 0);
    };

    const paginate = (books: bookType[], start: number) => {
        const paginatedBooks = books.slice(0, start + limit);
        setDisplayedBooks(paginatedBooks);
        setLoadMoreVisible(start + limit < books.length);
    };

    const handleFilterChange = (filterName: keyof Filters, value: any) => {
        setFilters(prevFilters => ({ ...prevFilters, [filterName]: value }));
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setOffset(0);
        applyFilters(allBooks);
    };

    const handleReset = () => {
        setFilters({
            name: "",
            author: "",
            category: [],
            language: [],
            publishDate: null,
        });
        setMinPrice("");
        setMaxPrice("");
        setOffset(0);
        setFilteredBooks(allBooks);
        paginate(allBooks, 0);
    };

    const handleMaxPriceChange = (value: string) => {
        if (/^\d*$/.test(value)) {
            setMaxPrice(value);
        }
    };

    const handleMinPriceChange = (value: string) => {
        if (/^\d*$/.test(value)) {
            setMinPrice(value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (['e', 'E', '+', '-', '.'].includes(e.key)) {
            e.preventDefault();
        }
    };

    useEffect(() => {
        console.log("Filters updated:", filters);
        console.log("Filtered books:", filteredBooks);
    }, [filters, filteredBooks]);

    useEffect(() => {
        if (filteredBooks.length === 0) {
            console.log("No books found with the current filters.");
        }
    }, [filteredBooks]);

    const toggleSidebarVisibility = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <section className="pt-180">
        <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Book List</h1>
               <button
                    className="bg-dark hover:bg-lightGreen dark:bg-gray-900 hover:dark:bg-darkHoverBg text-white text-2xl font-bold py-2 px-4 rounded-lg"
                    onClick={toggleSidebarVisibility}
                >
                    {isSidebarVisible ? 'Hide Search' : 'Show Search'}
                </button>
            </div>
            <div className="flex">
                <div className={`fixed inset-y-0 left-0 z-50 w-64 p-4  dark:bg-gray-900 transform ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:static md:w-1/4 lg:w-1/5 md:transform-none`}>
                    <SearchForm
                        filters={filters}
                        onFilterChange={handleFilterChange}
                        onSubmit={handleSearch}
                        onReset={handleReset}
                        onMinPriceChange={handleMinPriceChange}
                        onMaxPriceChange={handleMaxPriceChange}
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="w-full p-4">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                            {[...Array(limit)].map((_, index) => (
                                <SkeletonLoader key={index} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
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
                    {loadMoreVisible && displayedBooks.length !== 0 && (
                        <div className="flex justify-center mt-8">
                            <button
                                className="bg-dark hover:bg-lightGreen dark:bg-gray-900 hover:dark:bg-darkHoverBg text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-2xl animate-bounce"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>


    );
};

export default FilterModal;
