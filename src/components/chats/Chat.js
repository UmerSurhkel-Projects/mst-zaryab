import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Dropdown } from 'react-bootstrap';
import moment from 'moment';
import images from '../../assets/assets';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faEllipsisH, faCopy, faClock, faTrashAlt, faShare, faTrash, faSmile, faPaperclip, faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useGetContactByIdQuery, useDeleteContactMutation } from '../../api/ContactApi';
import RightSidebar from '../sidebar/RightSidebar';
import User from '../contacts/Contacts';
import Search from '../../components/search/Search';
import { useGetMessagesQuery } from '../../api/ChatApi';
import { useGetContactListQuery } from '../../api/ContactApi';
import { ToastContainer, toast } from 'react-toastify';
import socket from '../../socket';
import Avatar from './Avatar';
import Swal from 'sweetalert2';
import { useDeleteChatMutation } from '../../api/ChatApi';

const Chat = ({ contactId, setLatestChatsData }) => {
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isChatSearchVisible, setIsChatSearchVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(true);
    const { data: { user: contact } = {}, error, isLoading } = useGetContactByIdQuery(contactId);
    const [deleteContactMutation] = useDeleteContactMutation();
    const [deleteChatMutation] = useDeleteChatMutation();
    const userInformation = contact?.contactId;
    const userSocialLinks = contact?.contactId?.socialLinks;
    const userStr = localStorage.getItem('user');
    const user = JSON.parse(userStr);
    const firstName = user?.firstName?.trim() ?? "";
    const lastName = user?.lastName?.trim() ?? "";
    const limit = 10;
    const page = 1;
    const { data: { messages = [] } = {}, error: messagesError, isLoading: messagesIsLoading, refetch } = useGetMessagesQuery({ contactId, limit, page });

    const [currentMessage, setCurrentMessage] = useState('');
    const [messageData, setMessageData] = useState([])
    const [recentChats, setRecentChats] = useState([])
    const [isTyping, setIsTyping] = useState(false);
    const [isOnline, setIsOnline] = useState(false);

    // Function to send typing notification
    const sendTypingNotification = (isTyping) => {
        const data = { contactId, userId };
        if (isTyping) {
            socket.emit("start typing", data);
        } else {
            socket.emit("stop typing", data);
        }
    };

    // Event listener for typing events
    useEffect(() => {
        const typingListener = (data) => {
            const { userId } = data;
            if (userId !== localStorage.getItem('userId')) {
                setIsTyping(true);
            }
        };

        const stopTypingListener = (data) => {
            const { userId } = data;
            if (userId !== localStorage.getItem('userId')) {
                setIsTyping(false);
            }
        };

        socket.on('typing', typingListener);
        socket.on('stop typing', stopTypingListener);

        return () => {
            socket.off('typing', typingListener);
            socket.off('stop typing', stopTypingListener);
        };
    }, [socket]);

    // Event listener for online/offline events
    useEffect(() => {
        const onlineListener = (userId) => {
            setIsOnline(true);
        };

        const offlineListener = (userId) => {
            setIsOnline(false);
        };

        socket.on('online user', onlineListener);
        socket.on('offline user', offlineListener);

        return () => {
            socket.off('online user', onlineListener);
            socket.off('offline user', offlineListener);
        };
    }, [socket]);

    // Event handler for input change
    const handleMessageChange = (e) => {
        const message = e.target.value;
        setCurrentMessage(message);
        sendTypingNotification(message);
    };


    useEffect(() => {
        // console.log(messages, "messages")
        localStorage.setItem("messages", JSON.stringify(messages));
        setMessageData(messages)
    }, [messages]);


    useEffect(() => {
        // Socket code
        const connectListener = () => {
            console.log('Connected to server');
        };

        const messageReceivedListener = (message) => {
            console.log('Message received:', message);
            const receivedMessageData = {
                ...message,
                time: message.createdAt || moment().format('hh:mm A')
            };

            const data = { contactId: message?.senderId, userId: message?.receiverId };

            if (contactId === message.senderId) {
                console.log("seen message")
                socket.emit('seen messages', data);
                socket.emit('increase pending count', data);
            } else {
                console.log("increase message")
                socket.emit('increase pending count', data);
            }

            if (contactId === message.senderId) {
                setMessageData((prevMessages) => {
                    const updatedMessages = [...prevMessages, receivedMessageData];
                    localStorage.setItem("messages", JSON.stringify(updatedMessages));
                    return updatedMessages;
                });
            }
            setIsTyping(false);
        };

        const messageSeenListener = (data) => {
            console.log(data, "dataaaa123");
            const { getAllMessages, recentChats } = data;
            localStorage.setItem("messages", JSON.stringify(getAllMessages));
            setMessageData(getAllMessages);
            setRecentChats(recentChats)
            setLatestChatsData(recentChats)
        };

        const messageCountListener = (data) => {
            console.log(data, "message counter listner lisitng");
            setLatestChatsData(data);
        };

        socket.on('connect', connectListener);
        socket.on('message received', messageReceivedListener);
        socket.on('messages seen', messageSeenListener);
        socket.on('updating pending count', messageCountListener);

        return () => {
            socket.off('connect', connectListener);
            socket.off('message received', messageReceivedListener);
            socket.off('messages seen', messageSeenListener);
            socket.off('updating pending count', messageCountListener);
        };

    });

    const sendMessage = (e) => {
        e.preventDefault();
        if (currentMessage.trim()) {
            const currentTime = moment().format('hh:mm A');
            const createdAt = new Date(); // Use the current time as the creation time
            const messageData = { message: currentMessage, userId, contactId, time: currentTime, createdAt };
            socket.emit('send message', messageData);
            setMessageData((prevMessages) => {
                const updatedMessages = [...prevMessages, messageData];
                localStorage.setItem("messages", JSON.stringify(updatedMessages));
                return updatedMessages;
            });
            setCurrentMessage('');
        }
    };
    const toggleChatSearchVisibility = () => {
        setIsChatSearchVisible(!isChatSearchVisible);
    };
    const toggleProfileSidebar = () => {
        setIsProfileVisible(!isProfileVisible);
    };
    const handleDeleteContact = async () => {
        try {
            const response = await deleteContactMutation(userInformation._id).unwrap();
            console.log(response, "Response");
            toast.success("Contact deleted successfully");
        } catch (error) {
            console.error('Error deleting contact:', error);
            toast.error("Failed to delete contact");
        }
    };
    const deleteChat = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to delete this chat. This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteChatMutation({ contactId });
                    console.log('Chat deleted successfully');
                } catch (error) {
                    console.error('Error deleting chat:', error);
                }
            }
        });
    };
    useEffect(() => {
        refetch();
    }, [socket])

    useEffect(() => {
        if (socket)
            console.log("socket connected")
        else
            console.log("socket not connected")
    }, [socket])

    return (
        <>
            <ToastContainer />
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
                                <img src={images.placeHolder} className="rounded-circle" alt="image" />
                            </figure>
                            <div className="mt-1">
                                <h5>{contact?.userName}</h5>
                                {isOnline ?
                                    <small className="online">
                                        Online
                                    </small>
                                    :
                                    <small className="ofline">
                                        Ofline
                                    </small>
                                }
                            </div>
                        </div>
                        <div className="chat-options">
                            <ul className="list-inline">
                                <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                    <Link to="" className="btn btn-outline-light chat-search-btn" onClick={toggleChatSearchVisibility} >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </Link>
                                </li>
                                <li className="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile" onClick={toggleProfileSidebar}>
                                    <Link to="" className="btn btn-outline-light">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Link>
                                </li>
                                <li className="list-inline-item d-flex align-items-center justify-content-between">
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <FontAwesomeIcon icon={faEllipsisH} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu align="right">
                                            <Dropdown.Item className='text-danger' onClick={handleDeleteContact}>
                                                <FontAwesomeIcon icon={faTrash} />   Delete
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </div>
                        {isChatSearchVisible &&
                            <div className="chat-search visible-chat">
                                <form>
                                    <span className="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
                                    <input type="text" name="chat-search" placeholder="Search Chats" className="form-control" />
                                    <div className="close-btn-chat" onClick={() => setIsChatSearchVisible(!isChatSearchVisible)}><span className="material-icons">close</span></div>
                                </form>
                            </div>
                        }

                    </div>
                    <div className="chat-body" >
                        <Scrollbars style={{ height: 700 }}>

                            {messageData.map((msg, index) => (
                                <React.Fragment key={index}>
                                    <div className="messages">
                                        {msg.receiverId === userId ? (
                                            <div className="chats">
                                                <div className="chat-avatar">
                                                    <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
                                                </div>
                                                <div className="chat-content">
                                                    <div className="message-content">
                                                        {msg.message}
                                                        <div className="chat-time">
                                                            <div>
                                                                <div className="time"><FontAwesomeIcon className='me-1' icon={faClock} />{moment(msg.createdAt).format('hh:mm A')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat-profile-name">
                                                        <h6>{contact?.userName}</h6>
                                                    </div>
                                                </div>
                                                <div className="chat-action-btns ms-3">
                                                    <Dropdown align="end">
                                                        <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                            <FontAwesomeIcon icon={faEllipsisH} />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /></Dropdown.Item>
                                                            <Dropdown.Item href="#">Save<i className="material-icons">save</i></Dropdown.Item>
                                                            <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /></Dropdown.Item>
                                                            <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="chats chats-right">
                                                <div className="chat-content">
                                                    <div className="message-content">
                                                        {msg.message}
                                                        <div className="chat-time">
                                                            <div>
                                                                <div className="time"><FontAwesomeIcon className='me-1' icon={faClock} />{moment(msg.createdAt).format('hh:mm A')}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="chat-profile-name text-end">
                                                        <h6>You</h6>
                                                    </div>
                                                </div>
                                                <div className="chat-avatar">
                                                    <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
                                                </div>
                                                <div className="chat-action-btns me-2">
                                                    <Dropdown align="end">
                                                        <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
                                                            <FontAwesomeIcon icon={faEllipsisH} />
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /></Dropdown.Item>
                                                            <Dropdown.Item href="#">Save<i className="material-icons">save</i></Dropdown.Item>
                                                            <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /></Dropdown.Item>
                                                            <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /></Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>

                                                    <div className={`chat-read-col ${msg.isDelivered ? (msg.isSeen ? "text-success" : "text-secondary") : "text-muted"}`}>
                                                        {msg.isDelivered ? (
                                                            <FontAwesomeIcon icon={faCheckDouble} />
                                                        ) : (
                                                            <FontAwesomeIcon icon={faCheck} />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </React.Fragment>
                            ))}
                        </Scrollbars>
                    </div>
                </div >
                <div className="chat-footer">
                    {isTyping && (
                        <div><span class="animate-typing-col">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </span>
                        </div>
                    )}
                    {/* {console.log(isTyping, "isTyping")} */}

                    <form onSubmit={sendMessage}>
                        <div className="smile-col">
                            <Link to="#"><FontAwesomeIcon icon={faSmile} /></Link>
                        </div>
                        <div className="attach-col">
                            <Link to="#"><FontAwesomeIcon icon={faPaperclip} /></Link>
                        </div>

                        <input
                            type="text"
                            className=" chat_form"
                            placeholder="Enter Message....."
                            value={currentMessage}
                            onChange={handleMessageChange} />

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
            </div >
            {/* {isProfileVisible &&
                <RightSidebar
                    contactId={contactId}
                    username={contact?.userName}
                    userImage={images?.placeHolder}
                    userBio={contact?.bio}
                    userEmail={userInformation?.email}
                    userFacebook={userSocialLinks?.facebook}
                    userTwitter={userSocialLinks?.twitter}
                    userInstagram={userSocialLinks?.instagram}
                    block={contact?.block}
                    mute={contact?.mute}
                    deleteChat={deleteChat}
                />
            } */}
        </>
    )
}

export default Chat;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { Dropdown } from 'react-bootstrap';
// import moment from 'moment';
// import images from '../../assets/assets';
// import { useParams, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch, faUser, faEllipsisH, faCopy, faClock, faTrashAlt, faShare, faTrash, faSmile, faPaperclip, faCheckDouble, faCheck } from '@fortawesome/free-solid-svg-icons';
// import { useGetContactByIdQuery, useDeleteContactMutation } from '../../api/ContactApi';
// import RightSidebar from '../sidebar/RightSidebar';
// import User from '../contacts/Contacts';
// import Search from '../../components/search/Search';
// import { useGetMessagesQuery } from '../../api/ChatApi';
// import { useGetContactListQuery } from '../../api/ContactApi';
// import { ToastContainer, toast } from 'react-toastify';
// import socket from '../../socket';
// import Avatar from './Avatar';
// import Swal from 'sweetalert2';
// import { useDeleteChatMutation } from '../../api/ChatApi';

// const Chat = ({ contactId, setLatestChatsData }) => {
//     const userId = localStorage.getItem('userId');
//     const navigate = useNavigate();
//     const [showSearch, setShowSearch] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isChatSearchVisible, setIsChatSearchVisible] = useState(false);
//     const [isProfileVisible, setIsProfileVisible] = useState(true);
//     const { data: { user: contact } = {}, error, isLoading } = useGetContactByIdQuery(contactId);
//     const [deleteContactMutation] = useDeleteContactMutation();
//     const [deleteChatMutation] = useDeleteChatMutation();
//     const userInformation = contact?.contactId;
//     const userSocialLinks = contact?.contactId?.socialLinks;
//     const userStr = localStorage.getItem('user');
//     const user = JSON.parse(userStr);
//     const firstName = user?.firstName?.trim() ?? "";
//     const lastName = user?.lastName?.trim() ?? "";
//     const limit = 10;
//     const page = 1;
//     const { data: { messages = [] } = {}, error: messagesError, isLoading: messagesIsLoading, refetch } = useGetMessagesQuery({ contactId, limit, page });

//     const [currentMessage, setCurrentMessage] = useState('');
//     const [messageData, setMessageData] = useState([])
//     const [recentChats, setRecentChats] = useState([])
//     const [isTyping, setIsTyping] = useState(false);
//     const [isOnline, setIsOnline] = useState(false);

//     // Function to send typing notification
//     const sendTypingNotification = (isTyping) => {
//         const data = { contactId, userId };
//         if (isTyping) {
//             socket.emit("start typing", data);
//         } else {
//             socket.emit("stop typing", data);
//         }
//     };

//     // Event listener for typing events
//     useEffect(() => {
//         const typingListener = (data) => {
//             const { userId } = data;
//             if (userId !== localStorage.getItem('userId')) {
//                 setIsTyping(true);
//             }
//         };

//         const stopTypingListener = (data) => {
//             const { userId } = data;
//             if (userId !== localStorage.getItem('userId')) {
//                 setIsTyping(false);
//             }
//         };

//         socket.on('typing', typingListener);
//         socket.on('stop typing', stopTypingListener);

//         return () => {
//             socket.off('typing', typingListener);
//             socket.off('stop typing', stopTypingListener);
//         };
//     }, [socket]);

//     // Event listener for online/offline events
//     useEffect(() => {
//         const onlineListener = (userId) => {
//             setIsOnline(true);
//         };

//         const offlineListener = (userId) => {
//             setIsOnline(false);
//         };

//         socket.on('online user', onlineListener);
//         socket.on('offline user', offlineListener);

//         return () => {
//             socket.off('online user', onlineListener);
//             socket.off('offline user', offlineListener);
//         };
//     }, [socket]);

//     // Event handler for input change
//     const handleMessageChange = (e) => {
//         const message = e.target.value;
//         setCurrentMessage(message);
//         sendTypingNotification(message);
//     };


//     useEffect(() => {
//         // console.log(messages, "messages")
//         localStorage.setItem("messages", JSON.stringify(messages));
//         setMessageData(messages)
//     }, [messages]);


//     useEffect(() => {
//         // Socket code
//         const connectListener = () => {
//             console.log('Connected to server');
//         };

//         const messageReceivedListener = (message) => {
//             console.log('Message received:', message);
//             const receivedMessageData = {
//                 ...message,
//                 time: message.createdAt || moment().format('hh:mm A')
//             };

//             const data = { contactId: message?.senderId, userId: message?.receiverId };

//             if (contactId === message.senderId) {
//                 console.log("seen message")
//                 socket.emit('seen messages', data);
//                 socket.emit('increase pending count', data);
//             } else {
//                 console.log("increase message")
//                 socket.emit('increase pending count', data);
//             }

//             if (contactId === message.senderId) {
//                 setMessageData((prevMessages) => {
//                     const updatedMessages = [...prevMessages, receivedMessageData];
//                     localStorage.setItem("messages", JSON.stringify(updatedMessages));
//                     return updatedMessages;
//                 });
//             }
//             setIsTyping(false);
//         };

//         const messageSeenListener = (data) => {
//             console.log(data, "dataaaa123");
//             const { getAllMessages, recentChats } = data;
//             localStorage.setItem("messages", JSON.stringify(getAllMessages));
//             setMessageData(getAllMessages);
//             setRecentChats(recentChats)
//             setLatestChatsData(recentChats)
//         };

//         const messageCountListener = (data) => {
//             console.log(data, "message counter listner lisitng");
//             setLatestChatsData(data);
//         };

//         socket.on('connect', connectListener);
//         socket.on('message received', messageReceivedListener);
//         socket.on('messages seen', messageSeenListener);
//         socket.on('updating pending count', messageCountListener);

//         return () => {
//             socket.off('connect', connectListener);
//             socket.off('message received', messageReceivedListener);
//             socket.off('messages seen', messageSeenListener);
//             socket.off('updating pending count', messageCountListener);
//         };

//     });

//     const sendMessage = (e) => {
//         e.preventDefault();
//         if (currentMessage.trim()) {
//             const currentTime = moment().format('hh:mm A');
//             const createdAt = new Date(); // Use the current time as the creation time
//             const messageData = { message: currentMessage, userId, contactId, time: currentTime, createdAt };
//             socket.emit('send message', messageData);
//             setMessageData((prevMessages) => {
//                 const updatedMessages = [...prevMessages, messageData];
//                 localStorage.setItem("messages", JSON.stringify(updatedMessages));
//                 return updatedMessages;
//             });
//             setCurrentMessage('');
//         }
//     };
//     const toggleChatSearchVisibility = () => {
//         setIsChatSearchVisible(!isChatSearchVisible);
//     };
//     const toggleProfileSidebar = () => {
//         setIsProfileVisible(!isProfileVisible);
//     };
//     const handleDeleteContact = async () => {
//         try {
//             const response = await deleteContactMutation(userInformation._id).unwrap();
//             console.log(response, "Response");
//             toast.success("Contact deleted successfully");
//         } catch (error) {
//             console.error('Error deleting contact:', error);
//             toast.error("Failed to delete contact");
//         }
//     };
//     const deleteChat = async () => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: 'You are about to delete this chat. This action cannot be undone.',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     await deleteChatMutation({ contactId });
//                     console.log('Chat deleted successfully');
//                 } catch (error) {
//                     console.error('Error deleting chat:', error);
//                 }
//             }
//         });
//     };
//     useEffect(() => {
//         refetch();
//     }, [socket])

//     useEffect(() => {
//         if (socket)
//             console.log("socket connected")
//         else
//             console.log("socket not connected")
//     }, [socket])

//     return (
//         <>
//             <ToastContainer />
//             <div className="chat" id="middle">
//                 <div className="slimscroll">
//                     <div className="chat-header">
//                         <div className="user-details">
//                             <div className="d-lg-none ms-2">
//                                 <ul className="list-inline mt-2 me-2">
//                                     <li className="list-inline-item">
//                                         <Link className="text-muted px-0 left_side" to="#" data-chat="open">
//                                             <i className="fas fa-arrow-left"></i>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                             <figure className="avatar ms-1">
//                                 <img src={images.placeHolder} className="rounded-circle" alt="image" />
//                             </figure>
//                             <div className="mt-1">
//                                 <h5>{contact?.userName}</h5>
//                                 {isOnline ?
//                                     <small className="online">
//                                         Online
//                                     </small>
//                                     :
//                                     <small className="ofline">
//                                         Ofline
//                                     </small>
//                                 }
//                             </div>
//                         </div>
//                         <div className="chat-options">
//                             <ul className="list-inline">
//                                 <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
//                                     <Link to="" className="btn btn-outline-light chat-search-btn" onClick={toggleChatSearchVisibility} >
//                                         <FontAwesomeIcon icon={faSearch} />
//                                     </Link>
//                                 </li>
//                                 <li className="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile" onClick={toggleProfileSidebar}>
//                                     <Link to="" className="btn btn-outline-light">
//                                         <FontAwesomeIcon icon={faUser} />
//                                     </Link>
//                                 </li>
//                                 <li className="list-inline-item d-flex align-items-center justify-content-between">
//                                     <Dropdown>
//                                         <Dropdown.Toggle id="dropdown-basic">
//                                             <FontAwesomeIcon icon={faEllipsisH} />
//                                         </Dropdown.Toggle>
//                                         <Dropdown.Menu align="right">
//                                             <Dropdown.Item className='text-danger' onClick={handleDeleteContact}>
//                                                 <FontAwesomeIcon icon={faTrash} />   Delete
//                                             </Dropdown.Item>
//                                         </Dropdown.Menu>
//                                     </Dropdown>
//                                 </li>
//                             </ul>
//                         </div>
//                         {isChatSearchVisible &&
//                             <div className="chat-search visible-chat">
//                                 <form>
//                                     <span className="form-control-feedback"><FontAwesomeIcon icon={faSearch} /></span>
//                                     <input type="text" name="chat-search" placeholder="Search Chats" className="form-control" />
//                                     <div className="close-btn-chat" onClick={() => setIsChatSearchVisible(!isChatSearchVisible)}><span className="material-icons">close</span></div>
//                                 </form>
//                             </div>
//                         }

//                     </div>
//                     <div className="chat-body" >
//                         <Scrollbars style={{ height: 700 }}>

//                             {messageData.map((msg, index) => (
//                                 <React.Fragment key={index}>
//                                     <div className="messages">
//                                         {msg.receiverId === userId ? (
//                                             <div className="chats">
//                                                 <div className="chat-avatar">
//                                                     <img src={images.avatarEight} className="rounded-circle dreams_chat" alt="image" />
//                                                 </div>
//                                                 <div className="chat-content">
//                                                     <div className="message-content">
//                                                         {msg.message}
//                                                         <div className="chat-time">
//                                                             <div>
//                                                                 <div className="time"><FontAwesomeIcon className='me-1' icon={faClock} />{moment(msg.createdAt).format('hh:mm A')}</div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="chat-profile-name">
//                                                         <h6>{contact?.userName}</h6>
//                                                     </div>
//                                                 </div>
//                                                 <div className="chat-action-btns ms-3">
//                                                     <Dropdown align="end">
//                                                         <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
//                                                             <FontAwesomeIcon icon={faEllipsisH} />
//                                                         </Dropdown.Toggle>

//                                                         <Dropdown.Menu>
//                                                             <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Save<i className="material-icons">save</i></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /></Dropdown.Item>
//                                                         </Dropdown.Menu>
//                                                     </Dropdown>
//                                                 </div>
//                                             </div>
//                                         ) : (
//                                             <div className="chats chats-right">
//                                                 <div className="chat-content">
//                                                     <div className="message-content">
//                                                         {msg.message}
//                                                         <div className="chat-time">
//                                                             <div>
//                                                                 <div className="time"><FontAwesomeIcon className='me-1' icon={faClock} />{moment(msg.createdAt).format('hh:mm A')}</div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="chat-profile-name text-end">
//                                                         <h6>You</h6>
//                                                     </div>
//                                                 </div>
//                                                 <div className="chat-avatar">
//                                                     <img src={images.avatarTwelve} className="rounded-circle dreams_chat" alt="image" />
//                                                 </div>
//                                                 <div className="chat-action-btns me-2">
//                                                     <Dropdown align="end">
//                                                         <Dropdown.Toggle variant="" className="chat-action-col btn btn-link p-0 no-caret">
//                                                             <FontAwesomeIcon icon={faEllipsisH} />
//                                                         </Dropdown.Toggle>

//                                                         <Dropdown.Menu>
//                                                             <Dropdown.Item href="#">Copy<FontAwesomeIcon icon={faCopy} /></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Save<i className="material-icons">save</i></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Forward<FontAwesomeIcon icon={faShare} /></Dropdown.Item>
//                                                             <Dropdown.Item href="#">Delete<FontAwesomeIcon icon={faTrashAlt} /></Dropdown.Item>
//                                                         </Dropdown.Menu>
//                                                     </Dropdown>

//                                                     <div className={`chat-read-col ${msg.isDelivered ? (msg.isSeen ? "text-success" : "text-secondary") : "text-muted"}`}>
//                                                         {msg.isDelivered ? (
//                                                             <FontAwesomeIcon icon={faCheckDouble} />
//                                                         ) : (
//                                                             <FontAwesomeIcon icon={faCheck} />
//                                                         )}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </React.Fragment>
//                             ))}
//                         </Scrollbars>
//                     </div>
//                 </div >
//                 <div className="chat-footer">
//                     {isTyping && (
//                         <div><span class="animate-typing-col">
//                             <span class="dot"></span>
//                             <span class="dot"></span>
//                             <span class="dot"></span>
//                         </span>
//                         </div>
//                     )}
//                     {/* {console.log(isTyping, "isTyping")} */}

//                     <form onSubmit={sendMessage}>
//                         <div className="smile-col">
//                             <Link to="#"><FontAwesomeIcon icon={faSmile} /></Link>
//                         </div>
//                         <div className="attach-col">
//                             <Link to="#"><FontAwesomeIcon icon={faPaperclip} /></Link>
//                         </div>

//                         <input
//                             type="text"
//                             className=" chat_form"
//                             placeholder="Enter Message....."
//                             value={currentMessage}
//                             onChange={handleMessageChange} />

//                         <div className="form-buttons">
//                             <button className="btn send-btn" type="submit">
//                                 <span className="material-icons">send</span>
//                             </button>
//                         </div>
//                         <div className="specker-col">
//                             <Link to="#"><span className="material-icons">settings_voice</span></Link>
//                         </div>
//                     </form>
//                 </div>
//             </div >
//             {isProfileVisible &&
//                 <RightSidebar
//                     contactId={contactId}
//                     username={contact?.userName}
//                     userImage={images?.placeHolder}
//                     userBio={contact?.bio}
//                     userEmail={userInformation?.email}
//                     userFacebook={userSocialLinks?.facebook}
//                     userTwitter={userSocialLinks?.twitter}
//                     userInstagram={userSocialLinks?.instagram}
//                     block={contact?.block}
//                     mute={contact?.mute}
//                     deleteChat={deleteChat}
//                 />
//             }
//         </>
//     )
// }

// export default Chat;
