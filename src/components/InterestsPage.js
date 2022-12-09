import React from "react";
import FooterNavBar from './Footer'


export default function Interests() {
    return (
        <>
            <div className="interests-container">
                <ul>
                    <li>
                        <h1 className="interests-text">Programming, in particular web development, although at the moment I'm taking the time to learn about Machine Learning.</h1>
                    </li>
                    <br/>
                    <br/>
                    <li>
                        <h1 className="interests-text">Mathematics, seeing as I studied applied mathematics, I'd definitely say it's something I'm incredibly passionate about.</h1>
                    </li>
                    <br/>
                    <br/>
                    <li>
                        <h1 className="interests-text">Fitness, I've been lifting since 2017 and enjoy it alot, it's important to me to maintain my physical fitness.</h1>
                    </li>
                </ul>
            </div>
            <FooterNavBar />
        </>)
}