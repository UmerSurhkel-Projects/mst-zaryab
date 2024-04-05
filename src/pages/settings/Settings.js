import ProfileCard from '../../components/profile/ProfileCard'
import SettingsCard from '../../components/profile/SettingsCard'
import UpdateUserInfo from '../../components/profile/UpdateUserInfo'
import BreadCrumb from '../../components/breadcrumb/BreadCrumb'
import Search from '../../components/search/Search'
import { Scrollbars } from 'react-custom-scrollbars';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const Settings = () => {
    const navigate = useNavigate();
    const [twoStepVerificationFlag,setTwoStepVerificationFlag]=useState(false);


    const logoutHandler = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        navigate("/login")
    }

    return (
        <>
            <div class="content main_content">
                <div class="sidebar-group left-sidebar chat_sidebar">
                    <div id="chats" class="left-sidebar-wrap sidebar active slimscroll">
                        <div class="slimscroll">
                            <BreadCrumb
                                heading="Profile"
                                button="Logout"
                                onClick={logoutHandler}
                            />
                            <div class="settings-option">
                                <a href="#" class="user-list-item">Edit Settings</a>
                            </div>

                            <Scrollbars style={{ height: 900 }}>
                                <ProfileCard />
                                <SettingsCard setState={setTwoStepVerificationFlag} />
                            </Scrollbars>
                        </div>
                    </div>
                </div>
                <Scrollbars style={{ height: 900, overflowX: 'hidden' }}>
                    <UpdateUserInfo  twoStepVerificationFlag={twoStepVerificationFlag} />
                </Scrollbars>


            </div>
        </>
    )
}

export default Settings