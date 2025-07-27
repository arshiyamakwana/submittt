import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        location: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert('Enter valid credentials');
        }
    };

    const onChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
                <h3 className="text-center mb-4">Create a New Account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputName"
                            name="name"
                            value={credentials.name}
                            placeholder="Enter your name"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            name="email"
                            value={credentials.email}
                            placeholder="Enter your email"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="inputPassword" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword"
                            name="password"
                            value={credentials.password}
                            placeholder="Enter your password"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="inputAddress" className="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputAddress"
                            name="location"
                            value={credentials.location}
                            placeholder="Enter your address"
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Sign Up
                        </button>
                        <Link to="/login" className="btn btn-outline-secondary">
                            Already a user? Log In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
