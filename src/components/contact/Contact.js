import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "First name must be at least 2 characters"),
    lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    message: yup
        .string()
        .min(10, "Message must be at least 10 characters")
});

function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }
    

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
                {errors.firstName && <p>First name is required</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
                {errors.lastName && <p>Last name is required</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <p>Email is required</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control name="message" placeholder="Enter your message" ref={register} />
                {errors.message && <p>Message is required</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>    
        </Form>
    );
}

export default Contact;