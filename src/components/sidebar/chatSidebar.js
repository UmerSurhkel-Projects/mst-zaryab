import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Search from '../../components/search/Search';
import images from "../../assets/assets";
import { useGetContactListQuery } from "../../api/ContactApi";
import Contact from "../contacts/Contacts";

const ChatSidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    
    // Pagination parameters
    const limit = 10;
    const page = 1;
    
    const { data: { contactList = [] } = {}, isError, isContactList, refetch } = useGetContactListQuery({
        limit,
        page,
        search: searchQuery
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleContactClick = (contactId) => {
        navigate(`/contacts/${contactId}`);
    };

    const filteredContactList = contactList.filter(contact =>
        contact.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (contact.contactId?.email && contact.contactId.email.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="sidebar-group left-sidebar chat_sidebar">
            <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                <div className="slimscroll">
                    <div className="mt-3">
                        <Search handleSearch={handleSearch} />
                        {filteredContactList.length > 0 ? (
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatSidebar;
