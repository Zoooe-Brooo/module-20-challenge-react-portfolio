import '../styles/Contact.css';
import { useState } from 'react';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        if (!value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: `${id.charAt(0).toUpperCase() + id.slice(1)} is required`,
            }));
        } else if (id === 'email' && !validateEmail(value)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormState((prevFormState) => ({
            ...prevFormState,
            [id]: value,
        }));
        if (value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formState.name || !formState.email || !formState.message) {
            setErrors({
                name: !formState.name ? 'Name is required' : '',
                email: !formState.email ? 'Email is required' : '',
                message: !formState.message ? 'Message is required' : '',
            });
            return;
        }

        if (!validateEmail(formState.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
            return;
        }

        alert('Form submitted successfully!');
        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div>
            <h2 className="page-title">Contact</h2>
            <div className="page-content">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label><br />
                        <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            value={formState.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && <div className="invalid-message">{errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <div className="invalid-message">{errors.email}</div>}
                    </div>
                    <div>
                        <label htmlFor="message">Message</label><br />
                        <textarea
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            id="message"
                            rows="3"
                            value={formState.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.message && <div className="invalid-message">{errors.message}</div>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}