import React, { useState } from "react";
import './Generator.css';

const RandomActofKindness = () => {
    const actsOfKindness = [
        "Smile at a stranger.",
        "Hold the door open for someone.",
        "Pay for the person behind you in line.",
        "Write a thank you note to someone who has helped you.",
        "Give someone a compliment.",
        "Donate unused items to a local charity.",
        "Send a positive message to a friend or family member.",
        "Help someone with their groceries.",
        "Leave a kind note in a public place for someone to find.",
        "Volunteer your time to help others in need.",
    ];

    const [randomAct, setRandomAct] = useState('');

    const generateRandomAct = () => {
        const randomIndex = Math.floor(Math.random() * actsOfKindness.length);
        setRandomAct(actsOfKindness[randomIndex]);
    };

    return (
        <div className="random-act-container">
            <h2>Random Act of Kindness</h2>
            <button className="generate-button" onClick={generateRandomAct}>Generate Random Act</button>
            {randomAct && (
                <div className="random-act">
                    <p>{randomAct}</p>
                </div>
            )}
        </div>
    );
};

export default RandomActofKindness;