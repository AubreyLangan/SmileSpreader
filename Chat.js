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
    })
}