import React, { useState } from 'react';
import axios from 'axios';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        try {

            const response = await axios.post('api/signup', { email });
            if (response.status == 200) {
                setSuccess('Thank you for signing up for the newsletter!');
                setEmail('');
            }

        } catch (e) {
            setError(`There was an error signing up: ${e.message}`);
        }
    };

    return (
        <div>
            <h2>Newsletter Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit">Sign Up</button>


            </form>

        </div>
    )
};

export default NewsletterSignup;