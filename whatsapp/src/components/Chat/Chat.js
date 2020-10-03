import React from 'react'
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css"

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Chat Name</h3>
                    <p>Last seen.....</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Divyansh</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">Divyansh</span>
                    This is a message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>

                <form>
                    <input type="text" placeholder="Type a message" />
                    <button type="submit"> Send Message</button>
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
