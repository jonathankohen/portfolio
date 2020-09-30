import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default function Edit(props) {
    const { logged } = props;

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

    const [edit, setEdit] = useState(initialUser);

    const [errors, setErrors] = useState(initialUser);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/user/${logged.id}`, {
                withCredentials: true,
            })
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [props]);

    const handleInputChange = e => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        setErrors(initialUser);
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/update/user/${logged.id}`, edit, {
                withCredentials: true,
            })
            .then(res => {
                if (res.data.results) {
                    navigate(`/user/${logged.id}`);
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="col-5 mx-auto">
                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="firstName"
                            placeholder={edit.firstName}
                            type="text"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.firstName ? errors.firstName.message : ''}
                        </span>
                    </div>
                    <div className="col">
                        <input
                            name="lastName"
                            placeholder={edit.lastName}
                            type="text"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.lastName ? errors.lastName.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="city"
                            placeholder={edit.city}
                            type="text"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.city ? errors.city.message : ''}
                        </span>
                    </div>

                    <div className="col">
                        <select
                            className="custom-select"
                            name="state"
                            onChange={handleInputChange}
                            value={edit.state}
                        >
                            <option defaultValue>{edit.state}</option>
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DC">District of Columbia</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oediton</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <span className="text-danger">
                            {errors.state ? errors.state.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <select
                            className="custom-select text-muted"
                            name="priInst"
                            onChange={handleInputChange}
                            value={edit.priInst}
                        >
                            <option defaultValue>{edit.priInst}</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Drums">Drums</option>
                            <option value="Bass">Bass</option>
                            <option value="Vocals">Vocals</option>
                            <option value="Synth">Synth</option>
                        </select>
                        <span className="text-danger">
                            {errors.priInst ? errors.priInst.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <select
                            className="custom-select text-success font-weight-bold"
                            name="secInst"
                            onChange={handleInputChange}
                            value={edit.secInst}
                        >
                            <option defaultValue>{edit.secInst}</option>
                            <option value="Guitar">Guitar</option>
                            <option value="Drums">Drums</option>
                            <option value="Bass">Bass</option>
                            <option value="Vocals">Vocals</option>
                            <option value="Synth">Synth</option>
                        </select>
                        <span className="text-danger">
                            {errors.secInst ? errors.secInst.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mt-3">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg col-6 mx-auto shadow mb-5 btnLight"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}
