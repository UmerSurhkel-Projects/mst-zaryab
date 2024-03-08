import React, { useState } from 'react';
import User from '../../components/users/User';
import { useGetContactListQuery } from '../../api/ContactApi';
import images from '../../assets/assets';
import ChatPlaceHolder from '../../components/chats/ChatPlaceholder';
import Search from '../../components/search/Search';
import { useNavigate } from 'react-router-dom';
import Title from '../../components/title/Title';

const Contacts = () => {
    const navigate = useNavigate();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1); // current page
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { data: { contactList = [] } = {}, isError, isContactList, refetch } = useGetContactListQuery({
        limit: 10,
        page: 1,
        search: searchQuery 
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    }; 

    const handleContactClick = (contactId) => {
        navigate(`/contacts/${contactId}`);
    };

    const filteredContactList = contactList.filter(contact =>
        contact.userName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="sidebar-group left-sidebar chat_sidebar">
                <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                    <div className="slimscroll">
                        <div className="mt-3">
                            <Search handleSearch={handleSearch} />
                            <Title heading="Contacts" />
                            {filteredContactList.length > 0 ? (
                                filteredContactList.map(contact => (
                                    <div onClick={() => handleContactClick(contact?.contactId?._id)} key={contact._id}>
                                        <User
                                            name={contact?.userName}
                                            title={contact?.contactId?.email}
                                            image={images?.placeHolder}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className='text-center'>No contacts found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <ChatPlaceHolder />
        </>
    );
};

export default Contacts;
