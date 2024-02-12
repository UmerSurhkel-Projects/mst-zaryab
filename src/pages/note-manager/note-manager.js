import { AuthContext } from '../../App.js'
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/header";
import { useCreateNoteMutation, useViewNoteQuery, useEditNoteMutation } from '../../api/notesApi.js';

import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Define the modes
const NoteMode = {
    CREATE: 1,
    VIEW: 2,
    EDIT: 3
};

const NoteManager = () => {
    const { noteId } = useParams(); // Move this line to the top

    const location = useLocation();
    const isEditMode = location.pathname.includes("/edit/");
    const isViewMode = location.pathname.includes("/view/");
    const [mode, setMode] = useState(isEditMode ? NoteMode.EDIT : (isViewMode ? NoteMode.VIEW : NoteMode.CREATE));
    const [createNote, { isLoading: isCreating }] = useCreateNoteMutation();
    const { data: noteData, isLoading: isViewing } = useViewNoteQuery(noteId, {
        skip: mode !== NoteMode.VIEW && mode !== NoteMode.EDIT
    });

    const [editNote, { isLoading: isEditing }] = useEditNoteMutation();
    const [formData, setFormData] = useState({ title: "", description: "" });
    // const currentUser = useContext(AuthContext);


    useEffect(() => {
        if (noteId && isEditMode && noteData) {
            console.log("noteData in edit mode:", noteData);
            if (noteData) {
                console.log("Setting formData in edit mode");
                setFormData({
                    title: noteData.note.title || '',
                    description: noteData.note.description || ''
                });
            }
        }
    }, [noteId, noteData, isEditMode]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isCreating || isEditing) return; // Prevent double submission

        try {
            if (mode === NoteMode.CREATE) {
                await createNote(formData).unwrap();
                toast.success("Note created successfully!");
            }else if (mode === NoteMode.EDIT) {
                // The unwrap() method is used in Redux Toolkit Query (RTK Query)
                //  to extract the result data from a Promise returned by an API mutation.
                await editNote({ noteId, ...formData }).unwrap();
                toast.success("Note updated successfully!");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(`An error occurred: ${error.message || 'An unknown error occurred'}`);
        }
    };

    return (
        <>
            <Header />
            <main id="main">
                <Container>
                    <ToastContainer />
                    <Row className="justify-content-center">
                        <Col lg={6} md={8}>
                            <div className="addeditview-block">
                                <Link className="theme-link mb-3 d-inline-block align-top" to="/dashboard">
                                    <FontAwesomeIcon icon={faAnglesLeft} /> Back
                                </Link>
                                <h2 className="mb-3 mb-md-4">{mode === NoteMode.CREATE ? "Add" : mode === NoteMode.EDIT ? "Edit" : "View"} Note</h2>
                                <Form onSubmit={handleSubmit}>
                                    <FormGroup className="mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Title"
                                            name="title"
                                            value={mode !== NoteMode.VIEW ? formData.title : (noteData && noteData.note ? noteData.note.title : '')}
                                            onChange={handleInputChange}
                                            disabled={mode === NoteMode.VIEW}
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <textarea
                                            rows="5"
                                            cols="5"
                                            className="form-control"
                                            placeholder="Description"
                                            name="description"
                                            value={mode !== NoteMode.VIEW ? formData.description : (noteData && noteData.note ? noteData.note.description : '')}
                                            onChange={handleInputChange}
                                            disabled={mode === NoteMode.VIEW}
                                        />
                                    </FormGroup>
                                    {(mode === NoteMode.CREATE || mode === NoteMode.EDIT) && (
                                        <button type="submit" className="btn btn-success">
                                            {mode === NoteMode.CREATE ? "Create Note" : "Update Note"}
                                        </button>
                                    )}
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
};

export default NoteManager;
