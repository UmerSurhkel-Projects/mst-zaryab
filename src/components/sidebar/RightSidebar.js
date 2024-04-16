import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useUpdateContactMutation } from '../../api/ContactApi';
import { faEdit, faTrashAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


const RightSidebar = (props) => {
    const { contactId } = useParams();
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [username, setUsername] = useState(props.userName);
    const [editingUsername, setEditingUsername] = useState(props.userName); // Temporary username for editing
    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
    const [mutateUpdateContact] = useUpdateContactMutation();

    const initialSettingsValues = {
        block: false,
        mute: false,
    };

    const settingsSchema = Yup.object({
        block: Yup.boolean(),
        mute: Yup.boolean(),
    });

    const [block, setBlock] = useState(initialSettingsValues.block);
    const [mute, setMute] = useState(initialSettingsValues.mute);
    useEffect(() => {
        setBlock(props.block)
        setMute(props.mute);
        setUsername(props.username);
    }, [props])


    const updateContact = async (updates) => {
        try {
            const data = { ...updates, contactId };
            const response = await mutateUpdateContact(data);
            if (response && response.data && response.data.user) {
                //  props.handleUpdateParent(response.data.user);
                setBlock(response.data.user.block);
                setMute(response.data.user.mute);
            } else {
                console.error('Invalid response format:', response);
            }
        } catch (error) {
            console.error('Error updating contact:', error);
        }
    };

    const handleSwitchChange = async (fieldName) => {
        let updates = {};
        if (fieldName === 'block') {
            setBlock(!block);
            updates = { block: !block, mute };
        } else if (fieldName === 'mute') {
            setMute(!mute);
            updates = { mute: !mute, block };
        }
        Swal.fire({
            title: 'Do you want to save the changes?',
            confirmButtonText: 'Save',
            showCancelButton: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                await updateContact(updates);

            } else {
                setBlock(block);
                setMute(mute);
            }
        });
    };

    const handleUsernameEdit = () => {
        setIsEditingUsername(true);
        setEditingUsername(username);
    };

    const handleUsernameChange = (e) => {
        setEditingUsername(e.target.value);
    };

    const handleUsernameCancel = () => {
        setIsEditingUsername(false);
        setEditingUsername(username);
    };

    const handleUsernameSubmit = async (confirm) => {
        if (confirm) {
            try {
                const response = await mutateUpdateContact({ contactId, userName: editingUsername });
                if (response && response.data && response.data.user) {
                    setUsername(response.data.user.userName); // Update username with response
                    setIsEditingUsername(false);
                } else {
                    console.error('Invalid response format:', response);
                }
            } catch (error) {
                console.error('Error updating username:', error);
            }
        } else {
            handleUsernameCancel(); // Revert changes if not confirmed
        }
    };
  
 

    return (
        <div className={`right-sidebar ${isSidebarVisible ? '' : 'hide-right-sidebar'}`} id="middle1">
            <div className="right-sidebar-wrap active">
                <Scrollbars style={{ height: 900 }}>
                    <div className="slimscroll">
                        <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
                            <div className="chat-title">
                                <h4>PROFILE</h4>
                            </div>
                            <div className="contact-close_call text-end">
                                <Link to="#" className="close_profile close_profile4" onClick={toggleSidebar}>
                                    <span className="material-icons">close</span>
                                </Link>
                            </div>
                        </div>
                        <div className="sidebar-body">
                            <div className="mt-0 right_sidebar_logo">
                                <div className="text-center mb-2 right-sidebar-profile">
                                    <figure className="avatar avatar-xl mb-3">
                                        <img src={props.userImage} alt="Profile" className="rounded-circle" />
                                    </figure>
                                    <h5 className="profile-name">
                                        {
                                            isEditingUsername ? (
                                                <div className="username-edit-container">
                                                    <input
                                                        type="text"
                                                        value={editingUsername}
                                                        onChange={handleUsernameChange}
                                                        className="username-input"
                                                        autoFocus
                                                    />
                                                    <div className="username-icons">
                                                        <FontAwesomeIcon icon={faCheck} className="username-icon text-purple" onClick={() => handleUsernameSubmit(true)} />
                                                        <FontAwesomeIcon icon={faTimes} className="username-icon text-danger" onClick={() => handleUsernameSubmit(false)} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    {username}
                                                    <span className='text-purple'>
                                                        <FontAwesomeIcon icon={faEdit} onClick={handleUsernameEdit} />
                                                    </span>
                                                </>
                                            )
                                        }

                                    </h5>
                                    {/* <div className="online-profile">
                                        <span>online</span>
                                    </div> */}
                                </div>
                                <div>
                                    <div className="about-media-tabs">
                                        <nav>
                                            <div className="nav nav-tabs justify-content-center" id="nav-tab">
                                                <Link className="nav-item nav-link active" data-bs-toggle="tab" to="#about">About</Link>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="about">
                                                <p>{props.userBio}</p>
                                                <div className="member-details">
                                                    <ul>
                                                        {/* <li>
                                                            <h6>Phone</h6>
                                                            <span>{props.userPhoneNumber}</span>
                                                        </li> */}
                                                        {/* <li>
                                                            <h6>Nick Name</h6>
                                                            <span>{props.nickName}</span>
                                                        </li> */}
                                                        <li>
                                                            <h6>Email</h6>
                                                            <span><a href={`mailto:${props.userEmail}`} className="__cf_email__">{props.userEmail}</a></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="social-media-col">
                                                    {props.userFacebook || props.userTwitter || props.userInstagram ? <h6>Social media accounts</h6> : ""}
                                                    <ul>
                                                        {props.userFacebook && (
                                                            <li>
                                                                <a href={props.userFacebook} target="_blank" rel="noopener noreferrer">
                                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {props.userTwitter && (
                                                            <li>
                                                                <a href={props.userTwitter} target="_blank" rel="noopener noreferrer">
                                                                    <FontAwesomeIcon icon={faTwitter} />
                                                                </a>
                                                            </li>
                                                        )}
                                                        {props.userInstagram && (
                                                            <li>
                                                                <a href={props.userInstagram} target="_blank" rel="noopener noreferrer">
                                                                    <FontAwesomeIcon icon={faInstagram} />
                                                                </a>
                                                            </li>
                                                        )}
                                                    </ul>

                                                </div>
                                                <Formik
                                                    initialValues={initialSettingsValues}
                                                    validationSchema={settingsSchema}
                                                >
                                                    {({ getFieldProps }) => (
                                                        <Form className="settings-col">
                                                            <h6>Settings</h6>
                                                            <ul>
                                                                <li className="d-flex align-items-center">
                                                                    <label className="switch">
                                                                        <Field
                                                                            type="checkbox"
                                                                            {...getFieldProps('block')}
                                                                            checked={block}
                                                                            onChange={(e) => handleSwitchChange('block', e.target.checked)}
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                    <div><span>Block</span></div>
                                                                </li>
                                                                <li className="d-flex align-items-center">
                                                                    <label className="switch">
                                                                        <Field
                                                                            type="checkbox"
                                                                            {...getFieldProps('mute')}
                                                                            checked={mute}
                                                                            onChange={(e) => handleSwitchChange('mute', e.target.checked)}
                                                                        />
                                                                        <span className="slider round"></span>
                                                                    </label>
                                                                    <div><span>Mute</span></div>
                                                                </li>
                                                            </ul>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="report-col">
                            <ul>
                                {/* <li><a href="#"><span><i className="fas fa-sign-out-alt"></i></span> Exit Group</a></li>
								<li><a href="#"><span className="material-icons">report_problem</span> Report Chat</a></li> */}
                                <li className='text-danger delete-account' onClick={props.deleteChat}>
                                    <span href="#">
                                        <span>
                                            <FontAwesomeIcon  icon={faTrashAlt} />
                                        </span>
                                        Delete Chat
                                    </span>
                                </li>                           
                                 </ul>
                        </div>
                    </div>
                </Scrollbars>
            </div>
        </div>
    );
};


export default RightSidebar;

