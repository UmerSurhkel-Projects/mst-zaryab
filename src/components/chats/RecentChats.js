import React, { useState, useEffect } from 'react';
import Contact from '../contacts/Contacts';
import Search from '../search/Search';
import ChatPlaceHolder from '../chats/ChatPlaceholder';
import images from '../../assets/assets';
import { useRecentChatsQuery } from '../../api/ChatApi';
import Chat from '../chats/Chat';
import Title from '../title/Title';
import socket from '../../socket';

const RecentChats = () => {
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    // const [latestChatsData, setLatestChatsData] = useState([])
    const [messageData, setMessageData] = useState([])
    // const [recentChatsData, setRecentChatsData] = useState([])
    const { data: { recentChats = [] } = {}, refetch } = useRecentChatsQuery({ limit: 10, page: 1, search: searchQuery });

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const getLatestChatsData = (data) => {
        console.log('here my latest data is: ', data);
        // setLatestChatsData(data);
        // setRecentChatsData(data);
        refetch();
    };
            
    // useEffect(() => {
    //     console.log('HERE:????????????', selectedChatId, recentChats)
    //     setLatestChatsData(recentChats)
    // }, [recentChats])

    // useEffect(() => {
    //     console.log("latest chats", latestChatsData)

    // }, [latestChatsData])

    // const messageSeenListener = (data) => {
    //     console.log(data, "dataaaa");
    //     const { getAllMessages, recentChats } = data;
    //     console.log("messages seen message........");
    //     localStorage.setItem("messages", JSON.stringify(getAllMessages));
    //     setMessageData(getAllMessages);
    //     setLatestChatsData(recentChats)
    //     refetch()

    // };

    // useEffect(() => {
    //     socket.on('messages seen', messageSeenListener);
    //     return () => {
    //         socket.off('messages seen', messageSeenListener);
    //     };
    // }, [])
    
    const handleContactClick = (contactId) => {

        console.log('handleContactClick: I\'m here in function.', contactId)
        setSelectedChatId(contactId);
        const data = { contactId, userId: localStorage.getItem('userId') };
        socket.emit('seen messages', data);
        // refetch();
    };



    const resetChat = () => {
        setSelectedChatId(null);
    };

    // Subscribe to socket event for message seen
    // useEffect(() => {
    //     const messageSeenListener = (data) => {
    //         console.log('messageSeenListener data::: ', data)
    //         // refetch();
    //     };

    //     socket.on('messages seen', messageSeenListener);
    //     return () => {
    //         socket.off('messages seen', messageSeenListener);
    //     };
    // }, [socket]);


    

    return (
        <>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                    <div className="slimscroll">
                        <div className='mt-3'>
                            <Search handleSearch={handleSearch} onMyClick={handleSearch} />
                            <Title heading="Recent Chats" />
                        </div>
                        {recentChats.map(contact => (
                            <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
                                <Contact
                                    name={contact?.userName}
                                    title={contact?.contactId?.email}
                                    image={images?.placeHolder}
                                    notifications={contact?.pendingMsgCount}
                                    class="new-message-count"
                                    searchQuery={searchQuery}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {
                console.log('selectedChatId: ', selectedChatId)
            }
            {selectedChatId &&
                <Chat contactId={selectedChatId} setRecentChatsData={recentChats} setLatestChatsData={getLatestChatsData} onClose={resetChat} />
            }
            {!selectedChatId &&
                <ChatPlaceHolder setRecentChatsData={recentChats} setLatestChatsData={getLatestChatsData} />}
        </>
    );
}

export default RecentChats;



// import React, { useState, useEffect } from 'react';
// import Contact from '../contacts/Contacts';
// import Search from '../search/Search';
// import ChatPlaceHolder from '../chats/ChatPlaceholder';
// import images from '../../assets/assets';
// import { useRecentChatsQuery } from '../../api/ChatApi';
// import Chat from '../chats/Chat';
// import Title from '../title/Title';
// import socket from '../../socket';

// const RecentChats = () => {
//     const [selectedChatId, setSelectedChatId] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [latestChatsData, setLatestChatsData] = useState([])
//     const [messageData, setMessageData] = useState([])
//     const [recentChatsData, setRecentChatsData] = useState([])
//     const { data: { recentChats = [] } = {}, refetch } = useRecentChatsQuery({ limit: 10, page: 1, search: searchQuery });

//     const handleSearch = (query) => {
//         setSearchQuery(query);
//     };

//     useEffect(() => {
//         console.log('HERE:????????????', selectedChatId, recentChats)
//         setLatestChatsData(recentChats)
//     }, [recentChats])

//     useEffect(() => {
//         console.log("latest chats", latestChatsData)

//     }, [latestChatsData])

//     // const messageSeenListener = (data) => {
//     //     console.log(data, "dataaaa");
//     //     const { getAllMessages, recentChats } = data;
//     //     console.log("messages seen message........");
//     //     localStorage.setItem("messages", JSON.stringify(getAllMessages));
//     //     setMessageData(getAllMessages);
//     //     setLatestChatsData(recentChats)
//     //     refetch()

//     // };

//     // useEffect(() => {
//     //     socket.on('messages seen', messageSeenListener);
//     //     return () => {
//     //         socket.off('messages seen', messageSeenListener);
//     //     };
//     // }, [])
    
//     const handleContactClick = (contactId) => {

//         console.log('handleContactClick: I\'m here in function.', contactId)
//         setSelectedChatId(contactId);
//         const data = { contactId, userId: localStorage.getItem('userId') };
//         socket.emit('seen messages', data);
//         // refetch();
//     };



//     const resetChat = () => {
//         setSelectedChatId(null);
//     };

//     // Subscribe to socket event for message seen
//     useEffect(() => {
//         const messageSeenListener = (data) => {
//             refetch();
//         };

//         socket.on('messages seen', messageSeenListener);
//         return () => {
//             socket.off('messages seen', messageSeenListener);
//         };
//     }, [socket]);

//     const getLatestChatsData = (data) => {
//         setLatestChatsData(data);
//     };

//     return (
//         <>
//             <div className="sidebar-group left-sidebar chat_sidebar">
//                 <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
//                     <div className="slimscroll">
//                         <div className='mt-3'>
//                             <Search handleSearch={handleSearch} onMyClick={handleSearch} />
//                             <Title heading="Recent Chats" />
//                         </div>
//                         {latestChatsData.map(contact => (
//                             <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
//                                 <Contact
//                                     name={contact?.userName}
//                                     title={contact?.contactId?.email}
//                                     image={images?.placeHolder}
//                                     notifications={contact?.pendingMsgCount}
//                                     class="new-message-count"
//                                     searchQuery={searchQuery}
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {
//                 console.log('selectedChatId: ', selectedChatId)
//             }
//             {selectedChatId &&
//                 <Chat contactId={selectedChatId} setRecentChatsData={refetch} onClose={resetChat} setLatestChatsData={getLatestChatsData} />}
//             {!selectedChatId &&
//                 <ChatPlaceHolder setRecentChatsData={refetch} setLatestChatsData={setLatestChatsData} />}
//         </>
//     );
// }

// export default RecentChats;
