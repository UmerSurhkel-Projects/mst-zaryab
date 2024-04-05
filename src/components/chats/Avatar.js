import React from 'react'

const Avatar = ({avatar}) => {
    return (
        <div className="chat-avatar">
            <img src={avatar} className="rounded-circle dreams_chat" alt="image" />
        </div>
    )
}

export default Avatar