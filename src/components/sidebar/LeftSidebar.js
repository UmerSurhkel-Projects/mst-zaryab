import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../../contexts/theme-context';
import defaultTheme from '../../config/config';
import { Link, Navigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import images from '../../assets/assets';
import MessageIcon from '@mui/icons-material/Message';
import GroupIcon from '@mui/icons-material/Group';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import EditIcon from '@mui/icons-material/Edit';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import FlagIcon from '@mui/icons-material/Flag';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Dropdown, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import { useGetUserProfileQuery } from '../../api/UserApi';
import { useLogoutMutation } from '../../api/AuthApi';
import GenericModal from '../modal/Modal';
import { useAddContactMutation } from '../../api/ContactApi';

const Sidebar = () => {
    const { data } = useGetUserProfileQuery();
    const [logout] = useLogoutMutation();
    const [addContact, { isLoading, isError }] = useAddContactMutation();
    const userProfile = data?.user;
    const userId = data?.user?._id || null;
    const navigate = useNavigate();
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? JSON.parse(savedTheme) : defaultTheme;
    });
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const bodyElement = document.querySelector("body");
        if (theme === 'darkmode') {
            bodyElement.classList.add("darkmode");
        } else {
            bodyElement.classList.remove("darkmode");
        }
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    const toggleClass = () => {
        setTheme(currentTheme => currentTheme === 'darkmode' ? 'lightmode' : 'darkmode');
    };
    const handleLogout = async () => {
        // localStorage.removeItem('accessToken');
        // localStorage.removeItem('user');
        // navigate("/login")
        // toast("Logout Success");
        try {
            if (userId) {
                await logout(userId)//.unwrap();
                localStorage.removeItem('accessToken'); // Clear the access token on successful logout
                localStorage.removeItem('user');
                navigate("/login")
                toast("Logout Success");
            }
        } catch (error) {
            console.error('Logout failed', error);
        }
    }

    const initialValues = {
        userName: '',
        email: ''
    };

    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required')
    });

    const addContactSubmit = async (values, { setSubmitting }) => {
        try {
            await addContact(values).unwrap();
            console.log(values);
            setModalOpen(false);
        } catch (error) {
            console.error('Error adding contact:', error);
        } finally {
            setSubmitting(false);
        }
    };
    

    return (

        <ThemeContext.Provider value={theme}>
            <div className="sidebar-menu">
                <div className="logo-col">
                    <Link to="/"><img src={images.logo} alt="logo" /></Link>
                </div>
                <div className="menus-col">
                    <div className="chat-menus">
                        <ul>
                            <li><Link to="/" className="chat-unread blue"><MessageIcon /></Link></li>
                            <li><Link to="/contacts" className="chat-unread pink"><GroupIcon /></Link></li>
                            <li><Link to="/settings" className="chat-unread"><SettingsIcon /></Link></li>

                             {/*<li><Link to="/" className="chat-unread"><LibraryBooksIcon /></Link></li>
                            <li><Link to="/" className="chat-unread"><CallIcon /></Link></li>
                            */}
                        </ul>
                    </div>
                    <div className="bottom-menus">
                        <ul>
                            {/* <li><Link to="/" className="add-new-group"><GroupAddIcon /></Link></li>*/}
                            <li><Link to="/" className="add-contacts-btn" onClick={openModal}><FontAwesomeIcon icon={faPlus} /></Link></li>
                            <li><span to="/" onClick={() => toggleClass()} className="dark-mode-toggle"><DarkModeIcon /></span></li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className="chat-profile-icon no-caret">
                                        <Image src={userProfile?.imageUrl || images.placeHolder} roundedCircle alt="avatar" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="between" >
                                        {/* <Dropdown.Item href="/"> Edit Profile <EditIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Profile <AccountBoxIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Settings <SettingsIcon /></Dropdown.Item>
                                        <Dropdown.Item href="/"> Archived <FlagIcon /></Dropdown.Item> */}
                                        <Dropdown.Item onClick={handleLogout}> Logout <PowerSettingsNewIcon /> </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <GenericModal isOpen={modalOpen} onClose={closeModal} title="Add Friends">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={addContactSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field
                                    className="form-control"
                                    type="text"
                                    name="userName"
                                    id="name"
                                />
                                <ErrorMessage name="userName" component="div" className="text-danger" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    className="form-control"
                                    type="email"
                                    name="email"
                                    id="email"
                                />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className='d-flex aliign-items-center justify-content-end'>
                                <div className="btn btn-danger mx-3" onClick={() => setModalOpen(false)}>Cancel</div>
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Add to contacts</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </GenericModal>
        </ThemeContext.Provider>
    );
}

export default Sidebar;
