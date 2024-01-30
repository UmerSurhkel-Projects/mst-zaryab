import { AuthContext } from '../../App.js'
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { useReducer, useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/header";
import { createNoteAction, viewNotesAction, editNotesAction } from "../../actions/notes";
import { useLocation } from "react-router-dom";
import { ActionTypes } from "../../types";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// Define the modes
const NoteMode = {
    CREATE: 1,
    VIEW: 2,
    EDIT: 3
};
// Initial state for the reducer
const initialState = {
    loading: false,
    error: null,
    success: false,
    note: null
};
// Reducer function
const notesReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_NOTE_REQUEST:
            return { ...state, loading: true, error: null, success: false };
        case ActionTypes.CREATE_NOTE_SUCCESS:
            return { ...state, loading: false, error: null, success: true };
        case ActionTypes.CREATE_NOTE_FAILURE:
            return { ...state, loading: false, error: action.error, success: false };
        case ActionTypes.VIEW_NOTE_REQUEST:
            return { ...state, loading: true, error: null, note: null };
        case ActionTypes.VIEW_NOTE_SUCCESS:
            return { ...state, loading: false, note: action.payload, error: null, success: true };
        case ActionTypes.VIEW_NOTE_FAILURE:
            return { ...state, loading: false, error: action.payload, note: null };
        case ActionTypes.EDIT_NOTE_REQUEST:
            return { ...state, loading: true, error: null, note: null };
        case ActionTypes.EDIT_NOTE_SUCCESS:
            return { ...state, loading: false, note: action.payload, error: null, success: true };
        case ActionTypes.EDIT_NOTE_FAILURE:
            return { ...state, loading: false, error: action.payload, note: null };
        default:
            return state;
    }
};

const NoteManager = () => {
    const [state, dispatch] = useReducer(notesReducer, initialState);
    const location = useLocation();
    const isEditMode = location.pathname.includes("/edit/");
    const isViewMode = location.pathname.includes("/view/");
    const { noteId } = useParams();
    const [mode, setMode] = useState(isEditMode ? NoteMode.EDIT : (isViewMode ? NoteMode.VIEW : NoteMode.CREATE));
    const [formData, setFormData] = useState({ title: "", description: "" });
    // const currentUser = useContext(AuthContext);
  
    useEffect(() => {
        if (noteId && isViewMode || noteId && isEditMode) {
            viewNotesAction(noteId)(dispatch);
        }
    }, [noteId, dispatch, isViewMode]);

    useEffect(() => {
        if (noteId && isEditMode) {
            if (state.note) {
                setFormData({
                    title: state.note.title,
                    description: state.note.description
                });
            }
        }
    }, [noteId, state.note, isEditMode]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === NoteMode.CREATE) {
                await createNoteAction(formData)(dispatch);
            }
            if (mode === NoteMode.EDIT) {
                await editNotesAction(noteId, formData)(dispatch);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred!");
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
                                            value={mode !== NoteMode.VIEW ? formData.title : (state.note ? state.note.title : '')}
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
                                            value={mode !== NoteMode.VIEW ? formData.description : (state.note ? state.note.description : '')}
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