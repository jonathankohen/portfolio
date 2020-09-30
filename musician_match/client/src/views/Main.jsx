import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const Main = props => {
    const { logged } = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/users', { withCredentials: true })
            .then(res => setUsers(res.data.results))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate('/login');
                }
            });
    }, []);

    return (
        <div className="container">
            <h2 className="display-3 text-light textShadow mb-4 font-weight-bolder textShadow">
                Welcome, {logged.firstName}
            </h2>
            <h1>(ID: {logged.id})</h1>
            <h1>
                <Link to={`/update/user/${logged.id}`} className="text-light">
                    (Test Link)
                </Link>
            </h1>

            <table className="table table-hover table-light table-striped shadow-lg">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Primary Instrument</th>
                        <th>Secondary Instrument</th>
                        <th>Seeking</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Link to={`/user/${u._id}`}>
                                        <p className="lead" id="tableNames">
                                            <strong>
                                                <i>
                                                    {u.firstName} {u.lastName}
                                                </i>
                                            </strong>
                                        </p>
                                    </Link>
                                </td>
                                <td>{u.priInst}</td>
                                <td>{u.secInst ? u.secInst : '--'}</td>
                                <td>{u.seeking}</td>
                                <td>{u.city}</td>
                                <td>{u.state}</td>
                                <td>
                                    <Link to={`/user/${u._id}`} id="view">
                                        <strong>View</strong>
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Main;
