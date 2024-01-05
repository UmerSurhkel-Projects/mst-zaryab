import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/header";
import { optionsArray } from "../../config/config";
import { ActionTypes } from "../../types";
import { listNotesAction, deleteNoteAction, deleteSelectedNotesAction } from "../../actions/notes";
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import Swal from "sweetalert2";
import { toast, ToastContainer } from 'react-toastify';
import Loader from "../../components/loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import 'rc-pagination/assets/index.css';

const initialState = {
	notes: [],
	loading: true,
	error: null,
};
const notesListReducer = (state, action) => {
	switch (action.type) {
		case ActionTypes.LIST_NOTES_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ActionTypes.LIST_NOTES_SUCCESS:
			const { notes, total } = action.payload;
			return {
				...state,
				notes,
				total,
				loading: false,
			};
		case ActionTypes.LIST_NOTES_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

const Dashboard = () => {
	const [state, dispatch] = useReducer(notesListReducer, initialState);
	const [selectedNotes, setSelectedNotes] = useState([]);
	const [hasDeleted, setHasDeleted] = useState(false);
	const [limit, setLimit] = useState(optionsArray[0].value);
	const [pagination, setPagination] = useState({ page: 1, total: 1 });

	useEffect(() => {
		listNotesAction(dispatch, pagination.page, limit);
	}, [dispatch, pagination.page, limit]);

	const deleteNotes = (noteId) => {
		deleteNoteAction(noteId, pagination.page, limit)(dispatch);
		setHasDeleted(true);
	};

	useEffect(() => {
		if (hasDeleted) {
			setPagination({ page: 1, total: 1 })
			setLimit(optionsArray[0].value)
			setHasDeleted(false);
		}
	}, [hasDeleted])

	const handlePageChange = (page) => {
		console.log("Changing to page:", page);
		setPagination({ ...pagination, page });
		listNotesAction(dispatch, pagination.page, limit);
	};

	const handleCheckboxChange = (noteId, isChecked) => {
		if (isChecked) {
			setSelectedNotes([...selectedNotes, noteId]);
		} else {
			setSelectedNotes(selectedNotes.filter(id => id !== noteId));
		}
		console.log(isChecked, noteId, "checkbox is checked");
	};

	const selectAllNotes = () => {
		if (selectedNotes.length === state.notes.length) {
			// All notes are currently selected, so clear the selection
			setSelectedNotes([]);
		} else {
			// Not all notes are selected, so select all
			const allNoteIds = state.notes.map(note => note._id);
			setSelectedNotes(allNoteIds);
		}
	};

	const deleteAllNotes = () => {
		Swal.fire({
			title: "Do you want to delete all the selected notes?",
			showCancelButton: true,
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				await deleteSelectedNotesAction(selectedNotes, pagination.page, limit)(dispatch);
				listNotesAction(dispatch, pagination.page, limit);
			}
		});
	};

	const limitHandler = (selectedOption) => {
		console.log('selectedOption: ', selectedOption.value)
		setLimit(selectedOption.value);
		listNotesAction(dispatch, pagination.page, limit);


	}

	return (
		<>
			<Header />
			{state.loading && <Loader />}
			<main id="main">
				<Container>
					<ToastContainer />
					<div className="table-header d-flex justify-content-between mb-3 mb-md-5">
						<div className="d-flex align-items-center">
							<Select
								options={optionsArray}
								defaultValue={optionsArray[0]}
								onChange={limitHandler}
								classNamePrefix="custom-select"
								isSearchable={false}
							/>
							<span className="ms-2 note-text">Notes</span>
						</div>
						<div className="d-flex align-items-center">
							<button className="btn btn-danger me-2" onClick={deleteAllNotes} disabled={selectedNotes.length === 0} >Delete All</button>
							<Link className="btn btn-solid d-flex align-items-center justify-content-center" to="/add">
								<FontAwesomeIcon icon={faPlus} className="me-2" />
								<span>Add</span>
							</Link>
						</div>
					</div>
					<div className="table-responsive mb-3 mb-md-5">
						<Table className="theme-table notes-table">
							<thead>
								<tr>
									<th>
										<label className="right-label-checkbox">
											<input type="checkbox"
												checked={selectedNotes.length === state.notes.length}
												onChange={selectAllNotes}
											/>
											<span className="checkmark"></span>
										</label>
									</th>
									<th className="text-center">Sr#</th>
									<th>Title</th>
									<th>Description</th>
									<th className="text-center">Actions</th>
								</tr>
							</thead>
							<tbody>
								{Array.isArray(state.notes) && state.notes.map((note, index) => (
									<tr key={note._id || index}>
										<td>
											<label className="right-label-checkbox">
												<input
													type="checkbox"
													checked={selectedNotes.includes(note._id)}
													onChange={(e) => handleCheckboxChange(note._id, e.target.checked)}
												/>
												<span className="checkmark"></span>
											</label>
										</td>
										<td className="text-center">{(pagination.page - 1) * limit + index + 1}</td>
										<td>{note.title}</td>
										<td>{note.description}</td>
										<td className="text-center">
											<ul className="table-actions list-unstyled d-flex justify-content-center mb-0">
												<li className="cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content="View" >
													<Link className="d-flex justify-content-center align-items-center" to={`/view/${note._id}`}>
														<FontAwesomeIcon icon={faEye} />
													</Link>
												</li>
												<li className="cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content="Edit">
													<Link className="d-flex justify-content-center align-items-center" to={`/edit/${note._id}`}>
														<FontAwesomeIcon icon={faPen} />
													</Link>
												</li>
												<li className="cursor-pointer" data-tooltip-id="my-tooltip" data-tooltip-content="Delete">
													<span className="d-flex justify-content-center align-items-center" onClick={() => deleteNotes(note._id)}>
														<FontAwesomeIcon icon={faTrash} />
													</span>
												</li>
											</ul>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
					{
						state.total && limit &&
						<Pagination
							className='m-3 pagination d-flex justify-content-center'
							defaultCurrent={1}
							pageSize={limit}
							current={pagination.page}
							total={state.total * limit} // total notes
							onChange={handlePageChange}
							locale={localeInfo}
						/>
					}
				</Container>
			</main>
		</>
	);
};

export default Dashboard;
