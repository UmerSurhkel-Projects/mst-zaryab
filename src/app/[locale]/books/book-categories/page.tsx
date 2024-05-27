"use client";
import { useState, useEffect } from "react";
import { bookCategoriesType } from "@/api/Interfaces";
import { useGetBookCategoriesQuery } from "@/api/books/BooksExtendedApi";

const BooksCategories = () => {
    const [categories, setCategories] = useState<bookCategoriesType[]>([]);
    const { data, isLoading } = useGetBookCategoriesQuery("");


  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <div className="container mx-auto px-4">
    <div className="pt-34 py-180">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
               { categories.map((category) => (
                    <div key={category.id} className="col-span-1 p-4 bg-bookMainBG text-white rounded-lg shadow-lg h-52 hover:bg-lime-500">
                        <h3 className="text-3xl font-bold mb-2 flex items-center justify-center h-full ">{category.name}</h3>
                    </div>
                ))
            }
        </div>
    </div>
</div>
  );
}

export default BooksCategories;
