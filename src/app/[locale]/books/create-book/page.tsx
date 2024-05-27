'use client'
import * as Yup from 'yup';
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import { addBookType, bookType } from '@/api/Interfaces';
import { useAddBookMutation } from '@/api/books/BooksExtendedApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateBook: React.FC = () => {
  const [AddBookMutation] = useAddBookMutation();
  const initialValues: addBookType = {
    name:'',
    description:'',
    number_of_pages: 0,
    language:'',
    publication_date:'',
    dimensions:'',
    image:'',
    price: 0,
    author:'',
    category: {
      id:'',
      name:'',
    },
  };
  const validationSchema = Yup.object().shape({
    author: Yup.string().required('Author Name is required'),
    name: Yup.string().required('Book Name is required'),
    price: Yup.number().required('Book Price is required'),
    description: Yup.string().required('Book Description is required'),
    image: Yup.string().required('Book Cover is required'),
  });


  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };
  const handleSubmit = async (values: addBookType, { setSubmitting }: any) => {
    try {
      const payload: addBookType = {
        name: values.name,
        description: values.description,
        number_of_pages: 464,
        language: 'English',
        publication_date: '2024-01-14T06:00:00.000Z',
        dimensions: '5 x 1.16 x 8 inches',
        image: values.image,
        price: values.price,
        author: values.author,
        category: {
          id: '65a86faecc61cd97ff280d43',
          name: 'Science fiction',
        },
      };

      console.log(payload,"payload")
      const response = await AddBookMutation(payload);
      if(response){
        toast("Book Added Successfully");
      }
      console.log('Book added:', response);

      setSubmitting(false);
      setSelectedImage(null);
    } catch (error) {
      console.error('Error adding book:', error);
      setSubmitting(false);
    }
  };

  return (
    <section className='pt-100 w-100'>
          <ToastContainer />
      <div className='container'>
        <div className="mx-auto mt-8 p-8">
          <h2 className="text-5xl font-bold  text-center mb-14">Create Book</h2>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ isSubmitting,isValid  }) => (
              <Form>
                <div className='grid grid-cols-12 gap-6'>
                  <div className="col-span-12 md:col-span-6">
                  <div className="mb-6 mt-3 min-w-0">
                      <label htmlFor="title" className="block text-sm font-semibold text-white mb-1">Author Name</label>
                      <Field type="text" id="title" name="author" className="border border-dashed bg-transparent rounded-lg px-4 py-2 h-16 w-full" />
                    </div>
                    <div className="mb-6 min-w-0">
                      <label htmlFor="title" className="block text-sm font-semibold text-white mb-1">Book Name</label>
                      <Field type="text" id="title" name="name" className="border border-dashed bg-transparent rounded-lg px-4 py-2 h-16 w-full" />
                    </div>
                    <div className="mb-6 min-w-0">
                      <label htmlFor="price" className="block text-sm font-semibold  text-white  mb-1">Book Price</label>
                      <Field type="text" id="price" name="price" className="border border-dashed bg-transparent rounded-lg px-4 py-2 w-full h-16" />
                    </div>
                    <div className="mb-6 min-w-0">
                      <label htmlFor="description" className="block text-sm font-semibold text-white mb-1">Book Description</label>
                      <Field as="textarea" id="description" name="description" className="border border-dashed bg-transparent rounded-lg px-4 py-2 w-full h-16 " />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 relative">
                  <label htmlFor="description" className="block text-sm font-semibold text-white mt-1 ">Book Cover</label>
                    <div className="h-420 relative mt-2">
                      {selectedImage ? (
                        <Image className=" object-cover w-full h-full border border-dashed border-gray-300 rounded-lg " src={URL.createObjectURL(selectedImage)} alt="Selected profile photo" width={500} height={500}/>
                      ) : (
                        <div className="flex items-center justify-center w-full h-full border border-dashed border-gray-300 rounded-lg">
                          <span className="text-gray-400">Choose an image</span>
                        </div>
                      )}
                      <label htmlFor="image" className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer">
                        <span className="sr-only">Choose profile photo</span>
                        <input type="file" id="image" name="image" className="hidden" onChange={handleImageChange} />
                        {selectedImage ? (
                       <div className='bg-dark rounded-full p-2 w-60  h-60 text-xl flex items-center justify-center'><FontAwesomeIcon  icon={faEdit}/></div>
                        ) : (
                          <FontAwesomeIcon icon={faUpload}/>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className='flex justify-end'>
                <button type="submit" className={`bg-dark hover:bg-lightGreen dark:bg-darkHoverBg hover:dark:bg-gray-900 text-white py-2 px-11 rounded-lg  mt-6 md:mt-4`} disabled={isSubmitting}>Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default CreateBook;
