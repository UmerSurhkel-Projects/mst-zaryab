import React, { useState, useEffect } from 'react';
import Contact from '../../components/contacts/Contacts';
import { useGetContactListQuery } from '../../api/ContactApi';
import images from '../../assets/assets';
import ChatPlaceHolder from '../../components/chats/ChatPlaceholder';
import Search from '../../components/search/Search';
import Title from '../../components/title/Title';
import Loader from '../../components/loader/Loader';
import Chat from '../../components/chats/Chat';

const Contacts = () => {
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [recentChatsData, setRecentChatsData] = useState([]);

    const { data: { contactList = [] } = {}, isLoading } = useGetContactListQuery({
        limit: 10,
        page: 1,
        search: searchQuery
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    };
    const handleSearchClick = (query) => {
        setSearchQuery(query);
    }
    const handleContactClick = (contactId) => {
        setSelectedChatId(contactId);
    };
    const filteredContactList = contactList.filter(contact =>
        contact.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.contactId?.email && contact.contactId.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const getLatestChatsData = (data) => {
        console.log('here my latest data is: ', data);
        // setLatestChatsData(data);
        // setRecentChatsData(data);
        // refetch();
    };

    return (
        <>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                    <div className="slimscroll">
                        <div className="mt-3">
                            <Search handleSearch={handleSearch} onMyClick={handleSearchClick} />
                            <Title heading="Contacts" />
                            {isLoading ? (
                                <div className='text-center'>
                                    <Loader />
                                </div>
                            ) : (
                                filteredContactList.length > 0 ? (
                                    filteredContactList.map(contact => (
                                        <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
                                            <Contact
                                                name={contact?.userName}
                                                title={contact?.contactId?.email}
                                                image={images?.placeHolder}
                                                searchQuery={searchQuery}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className='text-center'>No contacts found</div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* {selectedChatId ? <Chat contactId={selectedChatId} /> : <ChatPlaceHolder />} */}
            {selectedChatId ? <Chat contactId={selectedChatId} setRecentChatsData={setRecentChatsData} setLatestChatsData={getLatestChatsData} /> : <ChatPlaceHolder />}

        </>
    );
};

export default Contacts;
