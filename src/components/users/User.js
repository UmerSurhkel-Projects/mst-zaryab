import { Link } from 'react-router-dom';
import images from '../../assets/assets'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';


const User = () => {
    return (

        <div className="sidebar-body" id="chatsidebar">
            <div className="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                <div className="chat-title">
                    <h4>Recent Chats</h4>
                </div>
                <div className="add-section">
                    <Link to="#"><FontAwesomeIcon icon ={faEdit}/></Link>
                </div>
            </div>

            <ul className="user-list mt-2">
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            <img src={images.avatarThirteen} className="rounded-circle" alt="image" />
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Forest Kroch</h5>
                            <p>It seems logical that the</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                            <div className="new-message-count">11</div>
                        </div>
                    </div>
                </li>
                <li className="user-list-item item-typing">
                    <div>
                        <div className="avatar avatar-online">
                            <img src={images.avatarEight} className="rounded-circle" alt="image" />
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>Regina Dickerson</h5>
                            <p><span className="animate-typing-col">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </span>
                            </p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default User;