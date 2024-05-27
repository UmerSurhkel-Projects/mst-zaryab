import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useDeleteBookMutation } from "@/api/books/BooksExtendedApi";
import { usePathname } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface BookCardProps {
  image: string;
  name: string;
  author:string;
  publishDate:string;
  description: string;
  price: number;
  language:string;
  category?: { 
    id: string;
    name: string;
};
  id: string;
}

const BookCard: React.FC<BookCardProps> = ({ id, image, name, description, price,author , publishDate,language,category}) => {
  const [deleteBookMutation] = useDeleteBookMutation();
  const pathname = usePathname();
  
  const deleteBookHandler = async() =>{
    try {
      const response = await deleteBookMutation(id)
      if(response){
        toast("Book Deleted Successfully");
      }
      if ("data" in response) {
        console.log("Book Deleted successfully:", response.data);
      } else if ("error" in response) {
        console.error("Error deleting book:", response.error);
      }
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  }

  return (
    <>
    
    <div className="w-full pb-8 px-4">
    <ToastContainer />
      <div className="max-w-lg rounded shadow-lg bg-bookMainBG dark:bg-gray-900  text-white">
        <div>
          <div className="relative group transition-colors">
            <div className="w-full h-420 z-1 ">
              <Image
                className="w-full object-cover object-center h-full"
                src={image}
                alt={name}
                width={600}
                height={400}
              />
            </div>
            <div className="absolute top-0 left-0 bg-bookMainBG dark:bg-gray-900  px-3 py-2  flex items-center justify-center z-1 ">{price}$</div>
            <div className="absolute -top-0 -right-0 bg-bookMainBG dark:bg-gray-900   px-4 py-2   flex items-center justify-center z-1 text-white ">{language}</div>
            <div className="absolute top-0 left-0 w-full h-full bg-dark opacity-0 hover:opacity-10"></div>
            {/* show this div on hover to its parent relative */}
            { pathname !== '/books/filter' &&  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 z-50 ">
              <Link href={`/books/update-book`} className="p-2 bg-bookMainBG dark:bg-gray-900  text-white text-lg mx-2 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer"><FontAwesomeIcon icon={faEdit} /></Link>
              <div className="p-2 bg-bookMainBG dark:bg-gray-900  text-white text-lg  rounded-full w-16 h-16 flex items-center justify-center cursor-pointer" onClick={deleteBookHandler}><FontAwesomeIcon icon={faTrash} /></div>
            </div>}
          </div>
        </div>
        <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-1">
        <h6>{author}</h6>
          <span>{ publishDate}</span>
        </div>
          <Link href={`/books/book-detail?id=${id}`} className="font-bold text-xl mb-2 line-clamp-1 hover:text-greenish hover:dark:text-darkColor ">{name}</Link>
          <p className="text-white text-base overflow-hidden line-clamp-4">
            {description}
          </p>
          <h2 className="text-white bg-dark  px-4 py-2 mt-3 inline-block rounded-5">{category?.name}</h2>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookCard;
