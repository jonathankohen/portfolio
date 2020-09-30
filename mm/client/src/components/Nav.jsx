import React from 'react';
import { Link } from '@reach/router';

const Nav = props => {
    // const { loggedIn } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <Link className="navbar-brand" to="/">
                <em>Logo</em>
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
                        <Link className="nav-link" to="/about">
                            How it Works
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/musician/edit:id">
                            Edit Profile
                        </Link>
                        {/* {loggedIn ? (
                            <Link to="/musician/edit:id">Edit Profile</Link>
                        ) : (
                            ''
                        )} */}
                    </li>
                </ul>
                <Link to="login" className="text-light">
                    Login
                </Link>

                {/* {loggedIn ? (
                    <Link to="logout">Logout</Link>
                ) : (
                    <Link to="login">Login</Link>
                )} */}
            </div>
        </nav>
    );
};

export default Nav;
