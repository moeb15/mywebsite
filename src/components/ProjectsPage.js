import React from "react";
import FooterNavBar from './Footer'
import Card from 'react-bootstrap/esm/Card'
import CardGroup from 'react-bootstrap/esm/CardGroup'



export default function Projects() {
    return (
        <>
            <CardGroup>
                <Card bg='text-light project-cards'>
                    <Card.Header>Personal Website</Card.Header>
                    <Card.Body>
                        <Card.Title>Status: In progress</Card.Title>
                        <Card.Text>
                            Technologies/Tools Used:
                            <ul>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>SQLAlchemy</li>
                                <li>PostgreSQL</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </Card.Text>
                        <Card.Text>
                            Peronsal website where I have my CV and various other things, mostly complete.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='text-light project-cards'>
                    <Card.Header>Social Media Website</Card.Header>
                    <Card.Body>
                        <Card.Title>Status: In progress</Card.Title>
                        <Card.Text>
                            Technologies Used:
                            <ul>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>SQLAlchemy</li>
                                <li>Flask-JWT-Extended</li>
                                <li>PostgreSQL</li>
                                <li>JavaScript</li>
                                <li>React</li>
                            </ul>
                        </Card.Text>
                        <Card.Text>
                            A project meant to mimic a social media website like Facebook, a work in progress.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card bg='text-light project-cards'>
                    <Card.Header>Sorting Algorithm Visualizer</Card.Header>
                    <Card.Body>
                        <Card.Title>Status: Complete</Card.Title>
                        <Card.Text>
                            Technologies Used:
                            <ul>
                                <li>Python</li>
                                <li>Pygame</li>
                            </ul>
                        </Card.Text>
                        <Card.Text>
                            A visualizer for a select amount of in-place sorting algorithms.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            <FooterNavBar />
        </>)
}