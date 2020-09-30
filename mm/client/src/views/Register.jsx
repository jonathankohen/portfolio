import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

import Input from '../components/Input';

export default function Register(props) {
    const { setLogged } = props;

    const initialReg = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg);

    const handleInputChange = e => {
        setReg({
            ...reg,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/register', reg, {
                withCredentials: true,
            })
            .then(res => {
                console.log(res);
                // how to see values in console. then, you know how to get the data 'res.data...'
                if (res.data.user) {
                    setLogged(res.data.user);
                    navigate('/dashboard');
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <Input
                name="firstName"
                value={reg.firstName}
                error={errors.firstName}
                handleChange={handleInputChange}
                label="First Name:"
                type="text"
            />
            <Input
                name="lastName"
                value={reg.lastName}
                error={errors.lastName}
                handleChange={handleInputChange}
                label="Last Name:"
                type="text"
            />
            <Input
                name="email"
                value={reg.email}
                error={errors.email}
                handleChange={handleInputChange}
                label="Email:"
                type="email"
            />
            <Input
                name="password"
                value={reg.password}
                error={errors.password}
                handleChange={handleInputChange}
                label="Password:"
                type="password"
            />
            <Input
                name="confirmPassword"
                value={reg.confirmPassword}
                error={errors.confirmPassword}
                handleChange={handleInputChange}
                label="Confirm Password:"
                type="password"
            />
            <Input submitValue="Register" type="submit" />
            <Link to="/login" />
        </form>
        // <div className="container d-flex justify-content-center">
        //     <div className="row mt-4">
        //         <div className="col-6 mx-auto mt-4">
        //             <strong>
        //                 <h1 className="text-light mt-5">
        //                     Looking for a new band member?
        //                 </h1>
        //             </strong>
        //             <strong>
        //                 <h3 className="text-light">
        //                     Start browsing your closest matches.
        //                 </h3>
        //             </strong>
        //         </div>
        //         <div className="col-4 mx-auto mt-5">
        //             <RegForm />
        //         </div>
        //     </div>
        // </div>
    );
}
