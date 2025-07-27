import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert('Enter valid credentials');
        } else {
            navigate('/');
        }
    };

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h3 className="text-center mb-4">Login to Your Account</h3>
                <form onSubmit={handleSubmit}>
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

                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                        <Link to="/createuser" className="btn btn-outline-secondary">
                            I'm a New User
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
