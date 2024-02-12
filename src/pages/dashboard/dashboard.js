import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/header/header";
import { optionsArray } from "../../config/config";
import Pagination from 'rc-pagination';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import Swal from "sweetalert2";
import { toast, ToastContainer } from 'react-toastify';
import Loader from "../../components/loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import 'rc-pagination/assets/index.css';

// Import the RTK Query hooks
import {
	useListNotesQuery,
	useDeleteNoteMutation,
	useDeleteSelectedNotesMutation
} from "../../api/notesApi";

const Dashboard = () => {
	const [selectedNotes, setSelectedNotes] = useState([]);
	const [limit, setLimit] = useState(optionsArray[0].value);
	const [pagination, setPagination] = useState({ page: 1, total: 1 });
	const [hasDeleted, setHasDeleted] = useState(false);

	// RTK Query hooks for fetching notes, deleting a note, and deleting selected notes
	const { data, error, isLoading } = useListNotesQuery({ page: pagination.page, limit });
	const [deleteNote] = useDeleteNoteMutation();
	const [deleteSelectedNotes] = useDeleteSelectedNotesMutation();

	// Effect for handling data changes (e.g., when notes are fetched)
	useEffect(() => {
		if (data) {
			setPagination(prevState => ({ ...prevState, total: data.total }));
		}
	}, [data]);
	


	const handlePageChange = (page) => {
		setPagination(prevState => ({ ...prevState, page }));
	};
	

	useEffect(() => {
		if (hasDeleted) {
			setPagination({ page: 1, total: 1 })
			setLimit(optionsArray[0].value)
			setHasDeleted(false);
		}
	}, [hasDeleted])

	const handleCheckboxChange = (noteId, isChecked) => {
		if (isChecked) {
			setSelectedNotes([...selectedNotes, noteId]);
		} else {
			setSelectedNotes(selectedNotes.filter(id => id !== noteId));
		}
	};

	const selectAllNotes = () => {
		if (selectedNotes.length === data.notes.length) {
			setSelectedNotes([]);
		} else {
			const allNoteIds = data.notes.map(note => note._id);
			setSelectedNotes(allNoteIds);
		}
	};

	const deleteNoteHandler = async (noteId) => {
		try {
			await deleteNote(noteId).unwrap();
			toast.success('Note deleted successfully!');
		} catch (error) {
			const errorMessage = error.data?.error || 'Unknown error';
			toast.error(`Error deleting the note: ${errorMessage}`);
		}
	};


	const deleteAllNotes = async () => {
		Swal.fire({
			title: "Do you want to delete all the selected notes?",
			showCancelButton: true,
			confirmButtonText: "Delete",
		}).then(async (result) => {
			if (result.isConfirmed) {
				try {
					await deleteSelectedNotes(selectedNotes).unwrap();
					setSelectedNotes([]);
					toast.success('Selected notes deleted successfully!');
				} catch (error) {
					const errorMessage = error.data?.error || 'Unknown error';
					toast.error(`Error deleting selected notes: ${errorMessage}`);
				}
			}
		});
	};

	const limitHandler = (selectedOption) => {
		setLimit(selectedOption.value);
	};

	return (
		<>
			<Header />
			{isLoading && <Loader />}
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
												checked={selectedNotes.length === data?.notes?.length}
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
								{Array.isArray(data?.notes) && data.notes.map((note, index) => (
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
													<span className="d-flex justify-content-center align-items-center" onClick={() => deleteNoteHandler(note._id)}>
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
					{pagination.total && limit &&
						<Pagination
							className='m-3 pagination d-flex justify-content-center'
							defaultCurrent={1}
							pageSize={limit} // items per page
							current={pagination.page}
							total={pagination.total*limit} // total number of items or pages
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
