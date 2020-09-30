import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Login = props => {
    const { setLogged } = props;
    const initialLogin = {
        email: '',
        password: '',
    };

    const [log, setLog] = useState(initialLogin);
    const [errors] = useState(initialLogin);

    const handleInputChange = e => {
        setLog({
            ...log,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/login', log, {
                withCredentials: true,
            })
            .then(res => {
                console.log(res);
                if (res.data.user) {
                    setLogged(res.data.user);
                    navigate('/users');
                } else {
                    console.log(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <h1 className="display-3 font-weight-bolder text-center mb-3 text-light text-underline textShadow">
                Login
            </h1>

            <form onSubmit={handleSubmit} className="col-3 mx-auto">
                <div className="row mb-2">
                    <input
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                    <span className="text-danger">
                        {errors.email ? errors.email.message : ''}
                    </span>
                </div>

                <div className="row mb-2">
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                    <span className="text-danger">
                        {errors.password ? errors.password.message : ''}
                    </span>
                </div>

                <div className="row my-3">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg col-6 mx-auto btnLight"
                        id="regBtn"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
