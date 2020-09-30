import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

export default function Show(props) {
    const initialUser = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        city: '',
        state: '',
        priInst: '',
        secInst: '',
        bio: '',
        seeking: '',
    };
    const [user, setUser] = useState(initialUser);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${props.id}`, {
                withCredentials: true,
            })
            .then(res => setUser(res.data.results))
            .catch(err => {
                console.log(err);
                if (err.response === 401) {
                    navigate('/login');
                }
            });
    }, [props]);

    return (
        <>
            <div className="container">
                <div className="jumbotron shadow-lg" id="landing_hero">
                    <h1 className="display-3 font-weight-bolder text-center">
                        {user.firstName} {user.lastName}
                        <h2 className="card-subtitle my-5 text-muted">
                            Seeking:{' '}
                            <span className="text-success">{user.seeking}</span>
                        </h2>
                        <h3 className="text-center my-5">
                            {user.city}, {user.state}
                        </h3>
                    </h1>
                    <p className="lead col-8 mx-auto">
                        <strong>Bio:</strong> {user.bio} Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Tempora sint
                        inventore aspernatur, nemo labore id tempore! Ea harum
                        veritatis obcaecati! Voluptate modi consectetur ut
                        molestiae adipisci laboriosam excepturi accusamus
                        repudiandae.
                    </p>

                    <hr className="my-2" />

                    <p>Primary Instrument: {user.priInst}</p>
                </div>
            </div>
        </>
    );
}
