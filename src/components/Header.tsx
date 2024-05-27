// 'use client'
// import { useState,useCallback,useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import 'flowbite';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
// import { faFilter } from "@fortawesome/free-solid-svg-icons";
// import LanguageSwitcher from "./LanguageSwitcher";
// import { usePathname } from "next/navigation";
// import ThemeContext, { ThemeContextType } from "@/contexts/theme-context";


// const Header = () => {
//     const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
//     const [theme, setTheme] = useState<string>(storedTheme || 'light'); 
//     const router = useRouter()
//     const pathname = usePathname();
//     const currentUser = localStorage.getItem("email")?.replace(/@gmail\.com$/, "");
 
//     const logout = () => {
//         localStorage.removeItem("access_token")
//         localStorage.removeItem("email")
//         router.push("/")
//     }
//     const toggleTheme = useCallback(() => {
//         setTheme((prevTheme) => {
//           const newTheme = prevTheme === 'light' ? 'dark' : 'light';
//           document.documentElement.className = newTheme; // Apply the theme to the body element
//           localStorage.setItem('theme', newTheme); // Store the new theme in localStorage
//           return newTheme;
//         });
//       }, []);
    
//       useEffect(() => {
//         document.documentElement.className = theme; // Apply the initial theme to the body element
//         localStorage.setItem('theme', theme); // Store the initial theme in localStorage
//       }, [theme]);
    
      

//     const contextThemeValue: ThemeContextType = {
//         theme,
//         toggleTheme,
//       };

//     return (
//         <ThemeContext.Provider value={contextThemeValue}>
//            {pathname !== '/en' && pathname !== '/fr'  && 
//            <nav className="bg-bookMainBG dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
//                 <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

//                     <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//                         <span className="self-center text-xs 3xl:text-4xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg font-semibold text-white whitespace-nowrap dark:text-white">The Lost Chapter</span>
//                     </Link>
//                     <div className="flex items-center md:justify-between lg:justify-between justify-center md:order-2 rtl:space-x-reverse">

//                                            </div>

//                     <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
//                         <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
//                         <button type="button" className=" mx-0  py-2 px-4 bg-lightGreen  text-white hover:bg-dark focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm  text-center dark:bg-darkBg hover:dark:bg-darkHoverBg dark:focus:ring-blue-800 " onClick={toggleTheme}>{theme === 'light' ?"Dark Mode":"Light Mode"}</button>
//                         {/* add tailwind dropdown */}
//                         {/* <button id="multiLevelDropdownButton" data-dropdown-toggle="multi-dropdown" className="text-white bg-dark hover:bg-dark  focus:outline-none  fonbold rounded-lg text-lg px-5 py-1 text-center inline-flex items-center" type="button">{currentUser} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
//                         </svg>
//                         </button> */}
//                         {/* <Link href={`/books/book-categories`}
//                             className=" text-white bg-dark hover:bg-dark focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm mr-7 text-center dark:focus:ring-blue-800">
//                            Categories
//                         </Link> */}
//                         <Link href={`/books/create-book`}>
//                             <button type="button" className=" mx-6 bg-lightGreen py-2 px-4 text-white dark:bg-darkBg hover:bg-dark focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm text-center hover:dark:bg-darkHoverBg dark:focus:ring-blue-800 ">Create Book</button>
//                         </Link>

//                         <Link href="/books/filter"
//                             className="mx-6  py-2 px-4 text-white bg-lightGreen dark:bg-darkBg hover:dark:bg-darkHoverBg hover:bg-dark focus:ring-0 focus:outline-none  font-medium rounded-lg text-sm text-center dark:focus:ring-blue-800">
//                            Filters <FontAwesomeIcon icon={faFilter} />
//                         </Link>
//                         <div className="mx-6">
//                             <LanguageSwitcher />
//                         </div>



//                         <div id="multi-dropdown" className="z-10 hidden bg-lightGreen dark:bg-darkBg hover:dark:bg-darkHoverBg text-white divide-y divide-gray-100 rounded-lg shadow w-24">
//                             <ul className="py-2  dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
//                                 <li className="text-sm text-white hover:text-black  inline-block" onClick={logout}>
//                                     <a href="#" className="block px-4 py-2 text-center">Sign out</a>
//                                 </li>
//                             </ul>
//                         </div>


//                         <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
//                             <span className="sr-only">Open main menu</span>
//                             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
//                             </svg>
//                         </button>

//                         </ul>
//                     </div>
//                 </div>
//             </nav>}
//         </ThemeContext.Provider>
//     )
// }

// export default Header;


'use client'
import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import 'flowbite';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import ThemeContext, { ThemeContextType } from "@/contexts/theme-context";

const Header = () => {
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
    const [theme, setTheme] = useState<string>(storedTheme || 'light'); 
    const router = useRouter();
    const pathname = usePathname();
    const currentUser = localStorage.getItem("email")?.replace(/@gmail\.com$/, "");
 
    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("email");
        router.push("/");
    }

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            document.documentElement.className = newTheme;
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }, []);
    
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const contextThemeValue: ThemeContextType = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextThemeValue}>
            {pathname !== '/en' && pathname !== '/fr' && (
                <nav className="bg-bookMainBG dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl 3xl:text-4xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-lg font-semibold text-white whitespace-nowrap dark:text-white">
                                The Lost Chapter
                            </span>
                        </Link>
                        <div className="flex items-center">
                            <button
                                data-collapse-toggle="navbar-sticky"
                                type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-sticky"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden w-full md:flex md:items-center md:justify-between md:w-auto" id="navbar-sticky">
                            <ul className="flex items-start justify-between md:items-start lg:items-center flex-wrap p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 rtl:space-x-reverse">
                                <li className="mb-4 md:mb-0">
                                    <button
                                        type="button"
                                        className="mx-0 py-2 px-4 bg-lightGreen  text-white hover:bg-dark focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center dark:bg-darkBg hover:dark:bg-darkHoverBg dark:focus:ring-blue-800"
                                        onClick={toggleTheme}
                                    >
                                        {theme === 'light' ? "Dark Mode" : "Light Mode"}
                                    </button>
                                </li>
                                <li className="mb-4 md:mb-0">
                                    <Link href={`/books/create-book`}>
                                        <button
                                            type="button"
                                            className="mx-0 bg-lightGreen py-2 px-4 text-white dark:bg-darkBg hover:bg-dark focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center hover:dark:bg-darkHoverBg dark:focus:ring-blue-800"
                                        >
                                            Create Book
                                        </button>
                                    </Link>
                                </li>
                                <li className="">
                                    <Link href="/books/filter" >
                                        <button  type="button"  className="mx-0 bg-lightGreen py-2 px-4 text-white dark:bg-darkBg hover:bg-dark focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center hover:dark:bg-darkHoverBg dark:focus:ring-blue-800"> Filters <FontAwesomeIcon icon={faFilter} /></button>
                                    </Link>
                                </li>
                                <li className="mx-0 mb-4 md:mb-0">
                                    <LanguageSwitcher />
                                </li>
                                <li className="mb-4 md:mb-0">
                                    <div className="relative">
                                        <button
                                            id="multiLevelDropdownButton"
                                            data-dropdown-toggle="multi-dropdown"
                                          className="mx-0 bg-lightGreen py-2 px-4 flex items-center justify-between text-white dark:bg-darkBg hover:bg-dark focus:ring-0 focus:outline-none font-medium rounded-lg text-sm text-center hover:dark:bg-darkHoverBg dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            {currentUser} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <div id="multi-dropdown" className="hidden z-10 bg-lightGreen dark:bg-darkBg hover:dark:bg-darkHoverBg text-white divide-y divide-gray-100 rounded-lg shadow w-24">
                                            <ul className="py-2 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                                                <li className="text-sm text-white hover:text-black inline-block" onClick={logout}>
                                                    <a href="#" className="block px-4 py-2 text-center">Sign out</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </ThemeContext.Provider>
    );
}

export default Header;
