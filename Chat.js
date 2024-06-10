import React, { useState, useEffect } from "react";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [username, setUsername] = useState('User');

    useEffect(() => {
        const initialMessages = [
            { username: 'User1', text: 'Hello everyone!'},
            { username: 'User2', text: 'Hi there!'},
        ];
        setMessages(initialMessages);
    }, []);

    const handleSendMessage = () => {
        if (messageInput.trim()) {
            setMessages([...messages, { username, text: messageInput }]);
            setMessageInput('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Chat Room</h2>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        <strong>{msg.username}: </strong>{msg.text}
                    </div>
                ))}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    placeholder="Your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-input"
                />
                <input
                    type="text"
                    placeholder="Type a message"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    className="message-input"
                />
                <button onClick={handleSendMessage} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;