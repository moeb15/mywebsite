import React, { useEffect, useState } from "react";
import Stack from 'react-bootstrap/esm/Stack'
import Navbar from 'react-bootstrap/esm/Navbar'
import Typewriter from 'typewriter-effect'
import ContactForm from "./ContactFrom";


export default function Homepage() {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
            .catch(err => console.error(err))
    }, [])

    const {title,message,subtext,contact_me} = {...data}

    return (
        <>
            <Stack className='homepage-stack'>
                <div className="homepage-title">
                    <h1 className="home-titletext h-text"> {title}</h1>
                </div>
                <div className="homepage-message h-text">
                    <h2 className="home-msgtext">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                strings: [message, subtext, contact_me]
                            }} />
                    </h2>
                </div>
            </Stack>
            <Navbar bg='dark' className="contact-navbar" fixed='bottom'>
                <ContactForm />
            </Navbar>
        </>)
}