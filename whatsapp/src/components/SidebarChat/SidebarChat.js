import React from 'react';
import { Avatar } from '@material-ui/core';
import './SidebarChat.css'

function SidebarChat() {
    return (
        <>
            <div className="sidebarChat">
                <Avatar />
                <div className="sidebarChat__info">
                    <h2>Chat Name</h2>
                    {/* <p>Timestamp</p> */}
                    <p>Last message sent/received</p>
                </div>
            </div>
            <div className = "sidebarChat__separator">
                <hr />
            </div>
        </>
    )
}

export default SidebarChat
