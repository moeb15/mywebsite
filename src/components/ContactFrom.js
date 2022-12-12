import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { useForm } from 'react-hook-form'

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
        <Form ref={form} className='contact-form' onSubmit={handleSubmit(sendEmail)}>
            <Form.Group className="mb-3 contact-text">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name='user_name' placeholder="Name"
                    {...register('user_name', { required: true })} />
                {errors.user_name && <span style={{ color: 'red' }}>Name Required</span>}
            </Form.Group>
            <Form.Group className="mb-3 contact-text" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='user_email' placeholder="Enter email"
                    {...register('user_email', { required: true })} />
                {errors.user_email && <span style={{ color: 'red' }}>Email Required</span>}
            </Form.Group>
            <Form.Group className="mb-3 contact-message contact-text">
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' name='message' type="text"
                    {...register('message', { required: true })} />
                {errors.message && <span style={{ color: 'red' }}>Message Required</span>}
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
                Submit
            </Button>
        </Form>
    );
}