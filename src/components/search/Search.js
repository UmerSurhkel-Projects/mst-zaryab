import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ handleSearch, onMyClick }) => {
    return (
    <Formik
    initialValues={{ search: '' }}
    onSubmit={(values, { setSubmitting }) => {
        handleSearch(values.search);
        setSubmitting(false);
    }}
>
    {({ values }) => ( // Destructure values from Formik props
        <Form className="search_chat has-search">
            <div className="input-group mb-3" >
                <span className="input-group-text" id="basic-addon1" onClick={() => onMyClick(values.search)}> <FontAwesomeIcon  icon={faSearch} /></span>
                <Field type="text" className="form-control chat_input ps-5" placeholder="Search Contacts" name="search" aria-label="Username" aria-describedby="basic-addon1" id="search-contacts" />
            </div>
        </Form>
    )}
    </Formik>
    );
};

export default Search;
