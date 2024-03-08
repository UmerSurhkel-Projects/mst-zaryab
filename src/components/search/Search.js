// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const Search = ({ setShow }) => {
//     return (
//         <Formik
//             initialValues={{ search: '' }}
//             onSubmit={(values, { setSubmitting }) => {
//                 console.log('Search query:', values.search);
//                 setShow(values.search !== '');
//                 setSubmitting(false);
//             }}
//         >
//             <Form className="search_chat has-search">
//                 <Field
//                     className="form-control chat_input ps-5"
//                     type="text"
//                     id="search-contacts"
//                     name="search"
//                     placeholder="Search Contacts"
//                 />
//                 <span className="form-control-feedback">
//                     <FontAwesomeIcon icon={faSearch} />
//                 </span>
//             </Form>
//         </Formik>
//     );
// };

import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ handleSearch ,onClick}) => { // Accept handleSearch as a prop
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, { setSubmitting }) => {
        handleSearch(values.search); // Call handleSearch to update the search query
        setSubmitting(false);
      }}
    >
      <Form className="search_chat has-search">
        <Field
          className="form-control chat_input ps-5"
          type="text"
          id="search-contacts"
          name="search"
          placeholder="Search Contacts"
        />
        <span className="form-control-feedback">
          <FontAwesomeIcon onClick={onClick} icon={faSearch} />
        </span>
      </Form>
    </Formik>
  );
};

export default Search;
