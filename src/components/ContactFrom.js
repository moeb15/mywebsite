import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { useForm } from 'react-hook-form'
import Alert from 'react-bootstrap/esm/Alert'

export default function ContactForm() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const form = useRef()

    const sendEmail = (e) => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            reset()
    };

    return (
        <>
            <Form ref={form} className='contact-form' onSubmit={handleSubmit(sendEmail)}>
                <Form.Group className="mb-3 contact-text">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='user_name' placeholder="Name"
                        {...register('user_name', { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3 contact-text" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='user_email' placeholder="Enter email"
                        {...register('user_email', { required: true })} />
                </Form.Group>
                <Form.Group className="mb-3 contact-message contact-text">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as='textarea' name='message' type="text"
                        {...register('message', { required: true })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className='errors-div'>
                {errors.user_name && <Alert variant='danger'>Name Required</Alert>}
                {errors.user_email && <Alert variant='danger'>Email Required</Alert>}
                {errors.message && <Alert variant='danger'>Message Required</Alert>}
            </div>
        </>
    );
}