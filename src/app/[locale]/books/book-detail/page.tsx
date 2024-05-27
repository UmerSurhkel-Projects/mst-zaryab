"use client"
import { useEffect, useState } from 'react';
import { bookType } from '@/api/Interfaces';
import { useGetBookQuery } from '@/api/books/BooksExtendedApi';
import Loader from '@/components/Loader';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const BookDetail = () => {
    const [book, setBook] = useState<bookType | null>(null);
    const searchParams = useSearchParams();
    const bookId = searchParams.get("id") || "";
    console.log("bookId:", bookId);


    const { data: bookDetail, isLoading, isError } = useGetBookQuery(bookId);

    useEffect(() => {
        if (bookDetail) {
            setBook(bookDetail);
        }
    }, [bookDetail]);

    if (isLoading) {
        return <Loader />;
    }

    if (isError || !book) {
        return <div>No book found</div>;
    }

    return (
        <section className='pt-180'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='p-4'>
                        <div className='w-full h-620 '>
                            <Image className='w-full object-cover object-center h-full' src={book.image} alt='Book Cover' width={500} height={400} />
                        </div>
                    </div>
                    <div className='p-4 flex items-start justify-center h-full flex-col'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl'>{book.name}</h1>
                        <p className='text-xs md:text-lg leading-2 py-8'>{book.description}</p>
                        <h5 className='text-3xl border  bg-lightGreen dark:bg-gray-900 hover:dark:bg-darkHoverBg inline-block p-3 rounded'>{book.price} $</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookDetail;
