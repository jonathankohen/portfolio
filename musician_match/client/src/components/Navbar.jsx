import React from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default function Navbar(props) {
    const { logged, setLogged } = props;

    const handleLogout = () => {
        axios
            .get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                navigate('/');
                setLogged(false);
            })
            .catch(err => console.log(err));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link className="navbar-brand text-primary" to="/" id="logo">
                <em>MM</em>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/about">
                            How it Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        {logged ? (
                            <Link
                                className="nav-link"
                                to={`/edit/user/${logged.id}`}
                            >
                                Edit Profile
                            </Link>
                        ) : (
                            ''
                        )}
                    </li>
                    <li className="nav-item">
                        {logged ? (
                            <Link className="nav-link" to="/users">
                                Musicians
                            </Link>
                        ) : (
                            ''
                        )}
                    </li>
                </ul>

                {logged ? (
                    <Link
                        className="text-secondary"
                        to="/logout"
                        onClick={handleLogout}
                    >
                        Logout
                    </Link>
                ) : (
                    <Link className="text-secondary" to="/login">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}
