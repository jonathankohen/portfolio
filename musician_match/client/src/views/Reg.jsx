import React, { useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

import RegFormFrag from '../components/RegFormFrag';

const Reg = props => {
    const { setLogged } = props;

    const initialReg = {
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
    const [reg, setReg] = useState(initialReg);
    const [errors, setErrors] = useState(initialReg);
    const [multi, setMulti] = useState('query');

    const handleInputChange = e => {
        setReg({
            ...reg,
            [e.target.name]: e.target.value,
        });
    };

    const handleChange = e => {
        setMulti(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/register', reg, {
                withCredentials: true,
            })
            .then(res => {
                console.log(res);
                if (res.data.user) {
                    console.log(res.data.user);
                    setLogged(res.data.user);
                    navigate('/users');
                } else {
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <div className="jumbotron shadow-lg" id="landing_hero">
                <h1 className="display-3 font-weight-bolder textShadowSm">
                    Musician Match.
                </h1>
                <p className="lead">
                    Whether you're searching for band members, a lesson teacher,
                    professionals to hire, or just people to jam with,{' '}
                    <em>
                        <strong>Musician Match</strong>
                    </em>{' '}
                    connects you with your ideal collaborator based on mutual
                    influences, goals, and location.
                </p>
                <hr className="my-2" />
                <p>
                    Register below to get access to our growing database of
                    musicians. Upload recordings, video, and pictures to compare
                    with potential connections!
                </p>
                <Link
                    to="/about"
                    className="btn btn-primary btn-lg shadow btnLight"
                >
                    Learn More
                </Link>
            </div>

            <h1 className="display-4 font-weight-bolder text-center mb-4 text-light text-underline textShadow">
                Register:
            </h1>
            <form onSubmit={handleSubmit} className="col-5 mx-auto">
                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="firstName"
                            placeholder="First Name"
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
                            placeholder="Last Name"
                            type="text"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.firstName ? errors.firstName.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="email"
                            placeholder="Email"
                            type="email"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.email ? errors.email.message : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="password"
                            placeholder="Password"
                            type="password"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.password ? errors.password.message : ''}
                        </span>
                    </div>
                    <div className="col">
                        <input
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            className="form-control shadow"
                            onChange={handleInputChange}
                        />
                        <span className="text-danger">
                            {errors.confirmPassword
                                ? errors.confirmPassword.message
                                : ''}
                        </span>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col">
                        <input
                            name="city"
                            placeholder="City"
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
                            value={reg.state}
                        >
                            <option defaultValue>State</option>
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
                            <option value="OR">Oregon</option>
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
                            value={reg.priInst}
                        >
                            <option defaultValue>Primary Instrument</option>
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

                <div className="row mb-2 text-muted">
                    <div className="col">
                        <select
                            className="custom-select"
                            value={multi}
                            onChange={handleChange}
                        >
                            <option defaultValue="query">
                                Do you play more than one instrument?
                            </option>
                            <option value="yes">Yes!</option>
                            <option value="no">Nope</option>
                        </select>
                    </div>
                </div>

                {multi === 'yes' ? (
                    <>
                        <div className="row mb-2">
                            <div className="col">
                                <select
                                    className="custom-select text-success font-weight-bold"
                                    name="secInst"
                                    onChange={handleInputChange}
                                    value={reg.secInst}
                                >
                                    <option defaultValue>
                                        Please Select a Secondary Instrument!
                                    </option>
                                    <option value="Guitar">Guitar</option>
                                    <option value="drums">Drums</option>
                                    <option value="Drums">Bass</option>
                                    <option value="Vocals">Vocals</option>
                                    <option value="synth">Synth</option>
                                </select>
                                <span className="text-danger">
                                    {errors.secInst
                                        ? errors.secInst.message
                                        : ''}
                                </span>
                            </div>
                        </div>

                        <RegFormFrag
                            msg="Awesome!"
                            bio={reg.bio}
                            errors={errors}
                            seeking={reg.seeking}
                            handleInputChange={handleInputChange}
                        />
                    </>
                ) : (
                    ''
                )}

                {multi === 'no' ? (
                    <>
                        <RegFormFrag
                            msg="No worries!"
                            bio={reg.bio}
                            errors={errors}
                            seeking={reg.seeking}
                            handleInputChange={handleInputChange}
                        />
                    </>
                ) : (
                    ''
                )}

                <div className="row mt-3">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg col-6 mx-auto shadow mb-5 btnLight"
                    >
                        Join Database
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Reg;
