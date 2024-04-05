// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import User from '../users/User';
// import TopUser from '../users/TopUser';
// import Search from '../search/Search';
// import ChatPlaceHolder from '../chats/ChatPlaceholder';
// import { useParams, useNavigate } from 'react-router-dom';
// import images from '../../assets/assets';
// import { useRecentChatsQuery } from '../../api/ChatApi';
// import { useGetContactByIdQuery } from '../../api/ContactApi';
// import Chat from '../chats/Chat';
// const Main = () => {
//     const navigate = useNavigate();
//     const { contactId } = useParams();

//     const [searchQuery, setSearchQuery] = useState('');
//     // const { data: { user: contact } = {}, error, isLoading } = useGetContactByIdQuery(contactId);

//       // Pagination parameters
//       const limit = 10;
//       const page = 1;
//       const { data: { recentChats = [] } = {}, isError, isContactList, refetch } = useRecentChatsQuery({limit, page,search: searchQuery});

    
//     const handleSearch = (query) => {
//         setSearchQuery(query);
//     };

//     const handleSearchClick = (query) => {
//         setSearchQuery(query);
//     };

//     const filteredContactList = recentChats.filter(contact =>
//         contact.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (contact.contactId?.email && contact.contactId.email.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     const handleContactClick = (contactId) => {
//         return
//         <><Chat/></>
//     };
//     return (
//         <>
//             <div className="sidebar-group left-sidebar chat_sidebar">
//                 <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
//                     <div className="slimscroll">
//                         {/* <div className="left-chat-title d-flex justify-content-between align-items-center">
//                             <div className="chat-title">
//                                 <h4>CHATS</h4>
//                             </div>
//                             <div className="add-section">
//                                 <ul>
//                                     <li><Link to="group.html"><span className="material-icons">group</span></Link></li>
//                                     <li><Link to="#" data-bs-toggle="modal" data-bs-target="#add-user"><FontAwesomeIcon icon={faPlus} /></Link></li>
//                                 </ul>
//                             </div>
//                         </div> */}
//                         <div className='mt-3'>
//                     <Search handleSearch={handleSearch} onMyClick={handleSearchClick} />
//                         </div>
//                             {filteredContactList.length > 0 ? (
//                                 filteredContactList.map(contact => (
//                                     <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
//                                         <User
//                                             name={contact?.userName}
//                                             title={contact?.contactId?.email}
//                                             image={images?.placeHolder}
//                                             notifications={contact?.pendingMsgCount}
//                                             searchQuery={searchQuery}
//                                         />
//                                     </div>
//                                 ))
//                             ) : (
//                                 <div className='text-center'>No contacts found</div>
//                             )}
//                         {/* <h4 className='text-center empty-placeholder-chat-text'>No recent chats </h4> */}
//                     </div>
//                 </div>
//             </div>
//             <ChatPlaceHolder />
//         </>
//     )
// }

// export default Main

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Contact from '../contacts/Contacts';
import TopContact from '../contacts/TopContact';
import Search from '../search/Search';
import ChatPlaceHolder from '../chats/ChatPlaceholder';
import { useParams, useNavigate } from 'react-router-dom';
import images from '../../assets/assets';
import { useRecentChatsQuery } from '../../api/ChatApi';
import { useGetContactByIdQuery } from '../../api/ContactApi';
import Chat from '../chats/Chat';

const Main = () => {
    const navigate = useNavigate();
    const { contactId } = useParams();

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedChatId, setSelectedChatId] = useState(null);

    const limit = 10;
    const page = 1;
    const { data: { recentChats = [] } = {}, isError, isContactList, refetch } = useRecentChatsQuery({limit, page, search: searchQuery});

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredContactList = recentChats.filter(contact =>
        contact.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.contactId?.email && contact.contactId.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleContactClick = (contactId) => {
        setSelectedChatId(contactId);
    };

    return (
        <>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                    <div className="slimscroll">
                        <div className='mt-3'>
                            <Search handleSearch={handleSearch} onMyClick={handleSearch} />
                        </div>
                        {filteredContactList.length > 0 ? (
                            filteredContactList.map(contact => (
                                <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
                                    <Contact
                                        name={contact?.userName}
                                        title={contact?.contactId?.email}
                                        image={images?.placeHolder}
                                        notifications={contact?.pendingMsgCount}
                                        searchQuery={searchQuery}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className='text-center'>No contacts found</div>
                        )}
                    </div>
                </div>
            </div>
            {selectedChatId ? <Chat contactId={selectedChatId} /> : <ChatPlaceHolder />}
        </>
    )
}

export default Main;
