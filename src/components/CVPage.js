import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container";
import CardGroup from 'react-bootstrap/esm/CardGroup'
import experience from './assets/codebrackets.png'
import joblogo from './assets/joblogo.png'
import edulogo from './assets/educationlogo.png'
import FooterNavBar from './Footer'

const cv_json = [{
    ides: "Experience with VSCode, Visual Studio, Eclipse IDE",
    programming: "Knowledge of JavaScript, React, Python, Flask, from both professional and personal development settings",
    testing: "Familiarity with tools such as Postman for API Testing, issue tracking tools like JIRA, and version control tools like Perforce and Git"
},
{
    Opentext: {
        company: "Opentext",
        job_responsibilities: "The team I had been apart of worked on Opentext's flagship project, Content Server.\n My responsibilities were to write unit tests for the web application, test endpoints using Postman, and work on bugfixes and feature\n implementations for the web application. The web app had been written using proprietary tools, so the language used was developed by\n Opentext, aside from this JavaScript had been used on the job.",
        job_title: "Software Engineer-Intern"
    },
    WISL: {
        company: "WISL", "job_responsibilities": "At WISL(Waterloo Information Systems Ltd.) we had been working on a web application meant to\n teach frontend and backend development to highschoolers. My job had been to manually test the web app, document bugs, \n and implement changes on the frontend using HTML, CSS, and JavaScript.",
        job_title: "QA-Intern"
    }
},
{ data: "Pursuing a BMath at the Univeristy of Waterloo, majoring in Applied Mathematics, graduating in December 2022.\n Throughout my education at the University of Waterloo I have taken a variety of courses touching on topics like cryptography,\n computer science, and computational mathematics." }]

export default function CV(props) {

    const [jsonlist, setJsonList] = useState('')

    useEffect(() => {
        setJsonList(cv_json)
    }, [])

    const { ides, programming, testing } = { ...jsonlist[0] }
    const { Opentext, WISL } = { ...jsonlist[1] }

    return (
        <Container>
            <Card className="bg-transparent text-white cv-card">
                <Card.Img src={experience} alt="Card image" />
                <Card.ImgOverlay  className="cv-img" style={{ textAlign: 'center', paddingTop: '10vh' }}>
                    <Card.Title className='w3-animate-opacity cv-text'>Skills</Card.Title>
                    <Card.Text className='w3-animate-opacity cv-text'>{programming}</Card.Text>
                    <Card.Text className='w3-animate-opacity cv-text'>{testing}</Card.Text>
                    <Card.Text className='w3-animate-opacity cv-text'>{ides}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <CardGroup>
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={joblogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '5vh' }}>
                        <Card.Title className='w3-animate-opacity cv-text'>Experience</Card.Title>
                        <Card.Text className='w3-animate-opacity cv-text'>{Opentext?.company}, {Opentext?.job_title}</Card.Text>
                        <Card.Text className='w3-animate-opacity cv-text'>{Opentext?.job_responsibilities}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={joblogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '5vh' }}>
                        <Card.Title className='w3-animate-opacity cv-text'>Experience</Card.Title>
                        <Card.Text className='w3-animate-opacity cv-text'>{WISL?.company}, {WISL?.job_title}</Card.Text>
                        <Card.Text className='w3-animate-opacity cv-text'>{WISL?.job_responsibilities}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={edulogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '10vh' }}>
                        <Card.Title className='w3-animate-opacity cv-text'>Education</Card.Title>
                        <Card.Text className='w3-animate-opacity cv-text'>{jsonlist[2]?.data}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            
            <FooterNavBar />
        </Container>)
}