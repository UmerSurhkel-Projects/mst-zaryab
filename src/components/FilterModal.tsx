import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FilterModal = () => {
  return (
    <div className="flex items-center justify-center h-fullPag min-h-screen p-4 text-center sm:block sm:p-0 ">
    <div className="flex justify-end  p-3 w-full">
            </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-xxl bg-white rounded-lg shadow-lg text-start ">
          
            <form className="p-5">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-greenish">Search By Name</label>
                        <input type="text" name="name" id="name" className=" text-black border text-sm rounded-lg w-full p-2" placeholder="Type product name" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-greenish">Search By Author</label>
                        <input type="text" name="price" id="price" className="border text-sm rounded-lg w-full p-2" placeholder="$2999" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-greenish">Search By Category</label>
                        <select name="category" id="category" className="border text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white">
                            <option selected>Select category</option>
                            <option value="TV">TV/Monitors</option>
                            <option value="PC">PC</option>
                            <option value="GA">Gaming/Console</option>
                            <option value="PH">Phones</option>
                        </select>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-greenish">Language</label>
                        <input type="text" name="price" id="price" className="border text-sm rounded-lg w-full p-2" placeholder="$2999" />
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <label className="block mb-2 text-sm font-medium text-greenish">Search By publish Date</label>
                        <input type="text" name="price" id="price" className="border text-sm rounded-lg w-full p-2" placeholder="$2999" />
                    </div>
                 
                </div>
                <div className="flex item-center justify-end">
                <button type="submit" className=" mt-4 inline-flex items-center justify-between mx-3 px-3 py-2.5 text-sm font-medium text-white bg-dark rounded-lg hover:bg-lightGreen focus:ring-4 focus:outline-none focus:ring-lightGreen">
                    Search <FontAwesomeIcon className="ml-2" icon={faSearch}/>
                </button>
                <button type="submit" className="mt-4 inline-flex items-center justify-center px-3 py-2.5 text-sm font-medium text-white bg-dark rounded-lg hover:bg-lightGreen  focus:ring-4 focus:outline-none focus:ring-lightGreen">
                    Reset
                </button>
                </div>
            </form>
        </div>
    </div>

  )
}

export default FilterModal