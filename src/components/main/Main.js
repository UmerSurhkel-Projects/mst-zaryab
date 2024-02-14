import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Chat from '../chats/Chat';
import User from '../users/User';
import TopUser from '../users/TopUser';
import Search from '../search/Search';

const Main = () => {
    return (
        <>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                    <div className="slimscroll">
                        <div className="left-chat-title d-flex justify-content-between align-items-center">
                            <div className="chat-title">
                                <h4>CHATS</h4>
                            </div>
                            <div className="add-section">
                                <ul>
                                    <li><Link to="group.html"><span className="material-icons">group</span></Link></li>
                                    <li><Link to="#" data-bs-toggle="modal" data-bs-target="#add-user"><FontAwesomeIcon icon={faPlus} /></Link></li>
                                </ul>
                            </div>
                        </div>
                        <Search />
                        <TopUser />
                        <User />
                    </div>
                </div>
            </div>
            <Chat />
        </>
    )
}

export default Main