import React from 'react';
import './profile.css'; 

const Profile = () => {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <h2>User Profile</h2>
                </div>
                <div className="profile-info">
                    <div className="profile-info-row">
                        <label>Name:</label>
                        <span>{user ? user.name : 'N/A'}</span>
                    </div>
                    <div className="profile-info-row">
                        <label>Email:</label>
                        <span>{user ? user.email : 'N/A'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
