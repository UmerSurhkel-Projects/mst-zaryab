import { ActionTypes } from '../types';
import { toast } from 'react-toastify';
import { ENV } from '../config/config';
const {baseUrl} = ENV;


// Action Creators for Create Note
const createNoteRequest = () => ({ type: ActionTypes.CREATE_NOTE_REQUEST });
const createNoteSuccess = (formData) => ({ type: ActionTypes.CREATE_NOTE_SUCCESS, payload: formData });
const createNoteFailure = (error) => ({ type: ActionTypes.CREATE_NOTE_FAILURE, payload: error });

const createNoteAction = (formData) => async (dispatch) => {
    dispatch(createNoteRequest());
    console.log("createNoteReques");

    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(
            `${baseUrl}/v1/note/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(formData),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`Note creation failed: ${errorData.message}`);
            dispatch(createNoteFailure(errorData.message));
        } else {
            dispatch(createNoteSuccess());
            toast.success("Note created successfully!");
        }
    } catch (error) {
        console.error(error);
        dispatch(createNoteFailure(error.message));
    }
};
const listNotesAction = async (dispatch, page = 1, limit = 3) => {
    dispatch({ type: ActionTypes.LIST_NOTES_REQUEST });
    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/v1/note/list?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${accessToken}`
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error(`List Notes failed: ${errorData.message}`);
            dispatch({ type: ActionTypes.LIST_NOTES_FAILURE, payload: errorData.message });
        } else {
            const { notes, totalPages: total } = await response.json();
            dispatch({ type: ActionTypes.LIST_NOTES_SUCCESS, payload: { notes, total } });

        }
    } catch (error) {
        console.error(error);
        dispatch({ type: ActionTypes.LIST_NOTES_FAILURE, payload: error.message });
    }
};
const deleteNoteAction = (noteId, page, limit) => async (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_NOTE_REQUEST });

    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/v1/note/delete/${noteId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
        console.log(`Attempting to delete note with ID: ${noteId}`);

        if (!response.ok) {
            const errorData = await response.json();
            dispatch({ type: ActionTypes.DELETE_NOTE_FAILURE, payload: errorData.message || 'Error deleting note' });
            return;
        }

        dispatch({ type: ActionTypes.DELETE_NOTE_SUCCESS, payload: noteId });
        toast.success("Note is deleted");
    } catch (error) {
        console.error('There was an error deleting the note:', error);
        dispatch({ type: ActionTypes.DELETE_NOTE_FAILURE, payload: error.message || 'Error deleting note' });
    }
    finally {
        listNotesAction(dispatch, page, limit);
    }
};
const viewNotesAction = (noteId) => async (dispatch) => {
    dispatch({ type: ActionTypes.VIEW_NOTE_REQUEST });

    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/v1/note/get/${noteId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        });
        console.log(`Attempting to view note with ID: ${noteId}`);

        if (!response.ok) {
            const errorData = await response.json();
            dispatch({ type: ActionTypes.VIEW_NOTE_FAILURE, payload: errorData.message || 'Error viewing note' });
            return;
        }

        const responseData = await response.json();
        // Pass only the 'note' part of the response to the reducer
        dispatch({ type: ActionTypes.VIEW_NOTE_SUCCESS, payload: responseData.note });
    } catch (error) {
        console.error('There was an error viewing the note:', error);
        dispatch({ type: ActionTypes.VIEW_NOTE_FAILURE, payload: error.message || 'Error viewing note' });
    }
};
const editNotesAction = (noteId, formData) => async (dispatch) => {
    dispatch({ type: ActionTypes.EDIT_NOTE_REQUEST });

    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/v1/note/edit`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                ...formData,
                noteId: noteId // Ensure the backend expects the note ID under the key '_id'
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            dispatch({ type: ActionTypes.EDIT_NOTE_FAILURE, payload: errorData.message || 'Error editing note' });
            return;
        }

        const responseData = await response.json();
        dispatch({ type: ActionTypes.EDIT_NOTE_SUCCESS, payload: responseData.note });
        toast.success("Note updated successfully!");
    } catch (error) {
        console.error('There was an error editing the note:', error);
        dispatch({ type: ActionTypes.EDIT_NOTE_FAILURE, payload: error.message || 'Error editing note' });
    }
};
const deleteSelectedNotesAction = (noteIds, page, limit) => async (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_SELECTED_NOTES_REQUEST });

    try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${baseUrl}/v1/note/delete-selected`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify({ noteIds }) // Sending an array of note IDs
        });
        console.log('Attempting to delete selected notes:', noteIds);

        if (!response.ok) {
            const errorData = await response.json();
            dispatch({ type: ActionTypes.DELETE_SELECTED_NOTES_FAILURE, payload: errorData.message || 'Error deleting notes' });
            return;
        }

        dispatch({ type: ActionTypes.DELETE_SELECTED_NOTES_SUCCESS, payload: noteIds });
        toast.success("Successfully Deleted");
        listNotesAction(dispatch, page, limit); // Refresh the list with current pagination
    } catch (error) {
        console.error('There was an error deleting the notes:', error);
        dispatch({ type: ActionTypes.DELETE_SELECTED_NOTES_FAILURE, payload: error.message || 'Error deleting notes' });
    }
};

export { createNoteAction, listNotesAction, deleteNoteAction, viewNotesAction, editNotesAction, deleteSelectedNotesAction };
