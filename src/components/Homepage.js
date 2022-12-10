import React, { useEffect, useState } from "react";
import Stack from 'react-bootstrap/esm/Stack'
import Navbar from 'react-bootstrap/esm/Navbar'
import Typewriter from 'typewriter-effect'
import ContactForm from "./ContactFrom";

const home_json = { contact_me:"If you want to reach out, fill out my contact form below, thanks!",
                message:"I'm Mujtaba, an aspiring Software Developer", 
                subtext:"Through the links above, you can find pages displaying my projects, cv, and interests.", 
                title:"Welcome!"}

export default function Homepage() {
    const [data, setData] = useState()

    useEffect(() => {
        setData(home_json)
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