"use client"
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import images from "@/assets/assets";
import { useLoginMutation } from "@/api/auth/AuthExtendedApi";
import { useRouter } from 'next/navigation'
import { AuthType } from "@/api/Interfaces";



interface MyFormValues {
  email: string;
  password: string;
}

const Home: React.FC<{}> = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();
  const router = useRouter();


  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const validate = (values: MyFormValues) => {
    const errors: Partial<MyFormValues> = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const handleSubmit = async (values: MyFormValues, actions: any) => {
	try {
	  const response = await login(values);
	
	  
	  if ('data' in response) {
		if(response){
			console.log("response",response);
			localStorage.setItem('access_token',response.data.access_token);
			localStorage.setItem('email', values.email);
			router.push('/books')
		}
		const authData: AuthType = response.data; 
		console.log('Login successful:', authData);
	  } else {
		console.error('Login error:', response.error);
	  }
	} catch (error) {
	  console.error('Login error:', error);
	} finally {
	  actions.setSubmitting(false);
	}
  };
  
    const token = localStorage.getItem('access_token');
    if (token) {
      router.push('/books');
    }

  return (
    <main className="main flex items-center justify-center h-screen relative">
    
      <Image
        src={images.backgroundImage}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="relative z-10 flex flex-col items-center justify-center col-span-8">
            <div className="get-started px-4 py-24 bg-dark rounded-lg border border-post border-solid border-1 text-center">
              <h1 className="text-greenish text-4xl md:text-5xl mb-8 uppercase italic font-extrabold p-3">
                Get your Favourite Book
              </h1>
              <Link
                href="/books"
                className="spin text-xl text-white bg-id py-3 px-8 bg-lightGreen font-bold rounded-md hover:bg-dark border hover:text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="relative z-10 flex flex-col items-center h-full col-span-4">
            <Formik
              initialValues={initialValues}
              validate={validate}
              onSubmit={handleSubmit}
            >
              <Form className="p-8 bg-lightGreen flex flex-col items-start justify-center h-full">
                <label htmlFor="email">Email</label>
                <div className="mb-6">
                  <Field
                    className="h-10 bg-transparent border p-2"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>

                <label htmlFor="password">Password</label>
                <div className="mb-6">
                  <Field
                    className="h-10 bg-transparent border p-2"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                </div>

                <button
                  className="bg-dark hover:bg-lightGreen border inline-block py-2 px-11"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Submit'}
                </button>
                {/* {isError && <div className="text-red-500">{error?.message}</div>} */}
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
