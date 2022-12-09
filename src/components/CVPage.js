import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container";
import experience from './assets/codebrackets.png'
import joblogo from './assets/joblogo.png'
import edulogo from './assets/educationlogo.png'
import FooterNavBar from './Footer'

export default function CV(props) {

    const [jsonlist, setJsonList] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/cv')
            .then(res => res.json())
            .then(data => {
                setJsonList(data)
            })
            .catch(err => console.error(err))
    }
        , [])

    const { ides, programming, testing } = { ...jsonlist[0] }
    const { Opentext, WISL } = { ...jsonlist[1] }

    return (
        <Container >
            <Card className="bg-transparent text-white cv-card">
                <Card.Img src={experience} alt="Card image" />
                <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '25%' }}>
                    <Card.Title className='w3-animate-opacity'>Skills</Card.Title>
                    <Card.Text className='w3-animate-opacity'>{programming}</Card.Text>
                    <Card.Text className='w3-animate-opacity'>{testing}</Card.Text>
                    <Card.Text className='w3-animate-opacity'>{ides}</Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Container className="d-flex">
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={joblogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '15%' }}>
                        <Card.Title className='w3-animate-opacity'>Experience</Card.Title>
                        <Card.Text className='w3-animate-opacity'>{Opentext?.company}, {Opentext?.job_title}</Card.Text>
                        <Card.Text className='w3-animate-opacity'>{Opentext?.job_responsibilities}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={joblogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '15%' }}>
                        <Card.Title className='w3-animate-opacity'>Experience</Card.Title>
                        <Card.Text className='w3-animate-opacity'>{WISL?.company}, {WISL?.job_title}</Card.Text>
                        <Card.Text className='w3-animate-opacity'>{WISL?.job_responsibilities}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <Container>
                <Card className="bg-transparent text-white cv-card">
                    <Card.Img src={edulogo} alt="Card image" />
                    <Card.ImgOverlay style={{ textAlign: 'center', paddingTop: '25%' }}>
                        <Card.Title className='w3-animate-opacity'>Education</Card.Title>
                        <Card.Text className='w3-animate-opacity'>{jsonlist[2]?.data}</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <FooterNavBar />
        </Container>)
}