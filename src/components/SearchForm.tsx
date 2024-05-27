import React, { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrashRestore } from "@fortawesome/free-solid-svg-icons";
import DatePicker from 'react-date-picker';
import { useTranslations } from 'next-intl';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

interface OptionType {
    value: string;
    label: string;
}

interface Filters {
    name: string;
    author: string;
    category: MultiValue<OptionType>;
    language:MultiValue<OptionType>;
    publishDate: Date | null;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface SearchFormProps {
    filters: Filters;
    onFilterChange: (filterName: keyof Filters, value: any) => void;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onReset: () => void;
    onMinPriceChange: (value: string) => void;
    onMaxPriceChange: (value: string) => void;
    minPrice: string;
    maxPrice: string;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
    filters, onFilterChange, onSubmit, onReset,
    onMinPriceChange, onMaxPriceChange, minPrice, maxPrice, onKeyDown
}) => {
    const t = useTranslations();

    const categories: { _id: string, name: string }[] = [
        { _id: "65a86faecc61cd97ff280d43", name: "Science fiction" },
        { _id: "65a86faecc61cd97ff280d42", name: "Fantasy" },
        { _id: "65a86faecc61cd97ff280d44", name: "Suspense" },
        { _id: "65a86faecc61cd97ff280d47", name: "Action" },
        { _id: "65a86faecc61cd97ff280d48", name: "Thriller" },
        { _id: "65a86faecc61cd97ff280d45", name: "Romance" },
        { _id: "65a86faecc61cd97ff280d46", name: "Organized crime" },

    ];
    const languages: { _id: string, name: string }[] = [
        { _id: "65a86faecc61cd97ff280d43", name: "Urdu" },
        { _id: "65a86faecc61cd97ff280d42", name: "Icelandic" },
        { _id: "65a86faecc61cd97ff280d44", name: "Turkish" },
        { _id: "65a86faecc61cd97ff280d45", name: "English" },
        { _id: "65a86faecc61cd97ff280d46", name: "German" },
        { _id: "65a86faecc61cd97ff280d47", name: "French" },
        { _id: "65a86faecc61cd97ff280d48", name: "Spanish" },
        { _id: "65a86faecc61cd97ff280d49", name: "Chinese" },
        { _id: "65a86faecc61cd97ff280d50", name: "Japanese" },
        { _id: "65a86faecc61cd97ff280d51", name: "Russian" },
        { _id: "65a86faecc61cd97ff280d52", name: "Italian" },
        { _id: "65a86faecc61cd97ff280d53", name: "Portuguese" },
    ];
    

    const categoryOptions: OptionType[] = categories.map(category => ({
        value: category._id,
        label: category.name
    }));

    const languageOptions: OptionType[] = languages.map(language=> ({
        value: language._id,
        label: language.name
    }));

    const handleChange = (filterName: keyof Filters, option: MultiValue<OptionType> | SingleValue<OptionType>) => {
        onFilterChange(filterName, option);
    };

    const languageChange = (filterName: keyof Filters, option: MultiValue<OptionType> | SingleValue<OptionType>) => {
        onFilterChange(filterName, option);
    };

    const handleDateChange = (date: Value) => {
        if (date instanceof Date || date === null) {
            onFilterChange("publishDate", date);
        }
    };

    return (
        <form onSubmit={onSubmit} className="p-5 rounded-lg bg-bookMainBG dark:bg-gray-900 w-full  ">
            <div className="grid grid-cols-12 gap-4">
                {/* Search by Name */}
                <div className="col-span-12 md:col-span-12">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.NAME')}</label>
                    <input
                        type="text"
                        name="name"
                        className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full p-2"
                        placeholder="Book Name"
                        value={filters.name}
                        onChange={(e) => onFilterChange("name", e.target.value)}
                    />
                </div>

                {/* Search by Author */}
                <div className="col-span-12 md:col-span-12">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.AUTHOR')}</label>
                    <input
                        type="text"
                        name="author"
                        className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full p-2"
                        placeholder="Author"
                        value={filters.author}
                        onChange={(e) => onFilterChange("author", e.target.value)}
                    />
                </div>

                {/* Search by Category */}
                <div className="col-span-12 md:col-span-12 text-black">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.CATEGORY')}</label>
                    <Select
                        isMulti
                        value={filters.category}
                        onChange={(option) => handleChange("category", option)}
                        options={categoryOptions}
                        className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full py-0 px-0"
                        classNamePrefix="categories-select"
                    />
                </div>

                {/* Search by Date */}
                <div className="col-span-12 md:col-span-12">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.DATE')}</label>
                    <DatePicker
                        onChange={handleDateChange}
                        value={filters.publishDate}
                        format="MM-dd-yyyy"
                        className="text-black text-sm rounded-lg w-full"
                    />
                </div>

                {/* Search by Language */}
                {/* <div className="col-span-12 md:col-span-12">
                    <label className="block mb-2 text-sm font-medium text-white">Search By Language</label>
                    <input
                        type="text"
                        name="language"
                        className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full p-2"
                        placeholder="English"
                        value={filters.language}
                        onChange={(e) => onFilterChange("language", e.target.value)}
                    />
                </div> */}
                <div className="col-span-12 md:col-span-12 text-black">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.LANGUAGE')}</label>
                    <Select
                        isMulti
                        value={filters.language}
                        onChange={(option) => languageChange("language", option)}
                        options={languageOptions}
                        className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full py-0 px-0"
                        classNamePrefix="categories-select"
                    />
                </div>

                {/* Search by Price */}
                <div className="col-span-12 md:col-span-12">
                    <label className="block mb-2 text-sm font-medium text-white">{t('FORM_CONTENT.PRICE')}</label>
                    <div className="flex flex-col">
                        <input
                            type="text"
                            className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full p-2"
                            placeholder="Min Price"
                            value={minPrice}
                            pattern="\d*"
                            onChange={(e) => onMinPriceChange(e.target.value)}
                            onKeyDown={onKeyDown}
                        />
                        <span className="text-white text-lg flex items-center justify-center">{t('FORM_CONTENT.TO')}</span>
                        <input
                            type="text"
                            className="border-none shadow-none focus:outline-none focus:ring-0 text-black text-sm rounded-lg w-full p-2"
                            placeholder="Max Price"
                            value={maxPrice}
                            pattern="\d*"
                            onChange={(e) => onMaxPriceChange(e.target.value)}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button type="submit" className="inline-flex items-center px-3 mr-2 py-2 text-sm font-medium text-white bg-dark dark:bg-darkBg hover:dark:bg-darkHoverBg rounded-lg hover:bg-lightGreen focus:ring-0 focus:outline-none">
                {t('FORM_CONTENT.SEARCH')}<FontAwesomeIcon icon={faSearch} className="ml-2" />
                </button>
                <button onClick={onReset} type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-dark dark:bg-darkBg  hover:dark:bg-darkHoverBg rounded-lg hover:bg-lightGreen focus:ring-0 focus:outline-none">
                {t('FORM_CONTENT.RESET')} <FontAwesomeIcon icon={faTrashRestore} className="ml-2" />
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
