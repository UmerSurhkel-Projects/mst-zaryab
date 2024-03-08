import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const User = (props) => {
    return (
        <div className="sidebar-body" id="chatsidebar">
            <ul className="user-list">
                <li className="user-list-item">
                    <div>
                        <div className="avatar avatar-away">
                            {props.image ? (
                                <img src={props.image} className="rounded-circle" alt="image" />
                            ) : (
                                <Skeleton width={40} height={40} />
                            )}
                        </div>
                    </div>
                    <div className="users-list-body">
                        <div>
                            <h5>{props.name ? props.name : <Skeleton />}</h5>
                            <p>{props.title ? props.title : <Skeleton  />}</p>
                        </div>
                        <div className="last-chat-time">
                            <small className="text-muted">05 min</small>
                            <div className="new-message-count">11</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default User;
