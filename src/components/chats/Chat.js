import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Dropdown } from 'react-bootstrap';
import images from '../../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhoneAlt, faVideo, faUser, faEllipsisH, faCopy, faClock, faTrash, faArchive, faSmile, faPaperclip, faTrashAlt, faShare } from '@fortawesome/free-solid-svg-icons';


const Chat = () => {
    const [isChatSearchVisible, setIsChatSearchVisible] = useState(false);
    const toggleChatSearchVisibility = () => {
        setIsChatSearchVisible(!isChatSearchVisible);
    };

    return (

        <div className="chat" id="middle">
            <div className="slimscroll">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="d-lg-none ms-2">
                            <ul className="list-inline mt-2 me-2">
                                <li className="list-inline-item">
                                    <Link className="text-muted px-0 left_side" to="#" data-chat="open">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <figure className="avatar ms-1">
                            <img src={images.avatarEight} className="rounded-circle" alt="image" />
                        </figure>
                        <div className="mt-1">
                            <h5>Doris Brown</h5>
                            <small className="online">
                                Online
                            </small>
                        </div>
                    </div>
                    <div className="chat-options">
                        <ul className="list-inline">
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                <Link to="" className="btn btn-outline-light chat-search-btn"onClick={toggleChatSearchVisibility} >
                                    <FontAwesomeIcon icon={faSearch} />
                                </Link>
                            </li>
                            {/* <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice call">
                                <Link to="" className="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#voice_call">

                                    <FontAwesomeIcon className=" voice_chat_phone" icon={faPhoneAlt} />
                                </Link>
                            </li>
                            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video call">
                                <Link to="" className="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#video_call">
                                    <FontAwesomeIcon icon={faVideo} />
                                </Link>
                            </li> */}
                            <li className="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                                <Link to="" className="btn btn-outline-light">
                                    <FontAwesomeIcon icon={faUser} />
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <Link to="#" className="dropdown-item dream_profile_menu">Archive <span> <FontAwesomeIcon icon={faArchive} /></span></Link>
                                    <Link to="#" className="dropdown-item">Muted <span className="material-icons">volume_off</span></Link>
                                    <Link to="#" className="dropdown-item">Delete <span><FontAwesomeIcon icon={faTrash} /></span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {isChatSearchVisible &&
                     <div className="chat-search visible-chat">
                     <form>
                         <span className="form-control-feedback"><FontAwesomeIcon icon={faSearch}/></span>
                         <input type="text" name="chat-search" placeholder="Search Chats" className="form-control" />
                         <div className="close-btn-chat" onClick={()=> setIsChatSearchVisible(!isChatSearchVisible)}><span className="material-icons">close</span></div>
                     </form>
                 </div>
                    
                    
                    }
                   
                </div>
                <div className="chat-body" >
                    <Scrollbars style={{ height: 700 }}>
                        <div className="messages">

                            <div className="chats">
                                <div className="chat-avatar">
                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-content">
                                    <div className="message-content">
                                        Hi James! What’s Up?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} />10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name">
                                        <h6>Doris Brown</h6>
                                    </div>
                                </div>
                                <div className="chat-action-btns ms-3">
                                    <Dropdown align="end">
                                        <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                            <FontAwesomeIcon icon={faEllipsisH} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                            <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                            <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                            <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Good morning, How are you? What about our next meeting?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} /> 10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div className="chat-avatar">
                                    <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-action-btns me-2">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="chat-read-col">
                                        <span className="material-icons">done_all</span>
                                    </div>
                                </div>
                            </div>
                            <div className="chats">
                                <div className="chat-avatar">
                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-content">
                                    <div className="message-content">
                                        Hi James! What’s Up?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} />10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name">
                                        <h6>Doris Brown</h6>
                                    </div>
                                </div>
                                <div className="chat-action-btns ms-3">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Good morning, How are you? What about our next meeting?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} /> 10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div className="chat-avatar">
                                    <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-action-btns me-2">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="chat-read-col">
                                        <span className="material-icons">done_all</span>
                                    </div>
                                </div>
                            </div>    <div className="chats">
                                <div className="chat-avatar">
                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-content">
                                    <div className="message-content">
                                        Hi James! What’s Up?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} />10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name">
                                        <h6>Doris Brown</h6>
                                    </div>
                                </div>
                                <div className="chat-action-btns ms-3">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Good morning, How are you? What about our next meeting?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} /> 10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div className="chat-avatar">
                                    <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-action-btns me-2">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="chat-read-col">
                                        <span className="material-icons">done_all</span>
                                    </div>
                                </div>
                            </div>    <div className="chats">
                                <div className="chat-avatar">
                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-content">
                                    <div className="message-content">
                                        Hi James! What’s Up?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} />10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name">
                                        <h6>Doris Brown</h6>
                                    </div>
                                </div>
                                <div className="chat-action-btns ms-3">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Good morning, How are you? What about our next meeting?
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} /> 10:00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div className="chat-avatar">
                                    <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-action-btns me-2">
                                    <div className="chat-action-btns ms-3">
                                        <Dropdown align="end">
                                            <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                <FontAwesomeIcon icon={faEllipsisH} />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Save<i className="material-icons">save</i> </Dropdown.Item>
                                                <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /> </Dropdown.Item>
                                                <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /> </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="chat-read-col">
                                        <span className="material-icons">done_all</span>
                                    </div>
                                </div>
                            </div>




                            <div className="chat-line">
                                <span className="chat-date">Today</span>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Wow Thats Great
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><FontAwesomeIcon icon={faClock} />10:02</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div className="chat-avatar">
                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-action-btns me-2">
                                    <div className="chat-action-col">
                                        <Link className="#" to="#" data-bs-toggle="dropdown">
                                            <FontAwesomeIcon icon={faEllipsisH} />
                                        </Link>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <Link to="#" className="dropdown-item dream_profile_menu">Copy <span ><i className="far fa-copy"></i></span></Link>
                                            <Link to="#" className="dropdown-item">Save <span className="material-icons">save</span></Link>
                                            <Link to="#" className="dropdown-item">Forward <span><i className="fas fa-share"></i></span></Link>
                                            <Link to="#" className="dropdown-item">Delete <span><i className="far fa-trash-alt"></i></span></Link>
                                        </div>
                                    </div>
                                    <div className="chat-read-col">
                                        <span className="material-icons">done_all</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>
                </div>

            </div>
            <div className="chat-footer">
                <form>
                    <div className="smile-col">
                        <Link to="#"><FontAwesomeIcon icon={faSmile} /></Link>
                    </div>
                    <div className="attach-col">
                        <Link to="#"><FontAwesomeIcon icon={faPaperclip} /></Link>
                    </div>
                    <input type="text" className=" chat_form" placeholder="Enter Message....." />
                    <div className="form-buttons">
                        <button className="btn send-btn" type="submit">
                            <span className="material-icons">send</span>
                        </button>
                    </div>
                    <div className="specker-col">
                        <Link to="#"><span className="material-icons">settings_voice</span></Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Chat;