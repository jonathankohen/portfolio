import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const RegForm = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [priInst, setPriInst] = useState('');
    const [priSkill, setPriSkill] = useState('');
    const [secInst, setSecInst] = useState('');
    const [secSkill, setSecSkill] = useState('');
    const [terInst, setTerInst] = useState('');
    const [terSkill, setTerSkill] = useState('');
    const [bio, setBio] = useState('');
    const [influences, setInfluences] = useState('');
    const [seeking, setSeeking] = useState('');

    const [errors, setErrors] = useState(null);

    const register = event => {
        event.preventDefault();

        const newMusician = {
            firstName,
            lastName,
            city,
            state,
            email,
            password,
            confirmPassword,
            priInst,
            priSkill,
            secInst,
            secSkill,
            terInst,
            terSkill,
            bio,
            influences,
            seeking,
        };

        axios
            .post('http://localhost:8000/api/register', newMusician, {
                withCredentials: true,
            })
            .then(res => {
                console.log(res);

                setFirstName('');
                setLastName('');
                setCity('');
                setState('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setPriInst('');
                setPriSkill('');
                setSecInst('');
                setSecSkill('');
                setTerInst('');
                setTerSkill('');
                setBio('');
                setInfluences('');
                setSeeking('');

                navigate('/');
            })
            .catch(err => {
                console.log(err);

                setErrors(err.response.data.errors);
            });
    };
    // const initialState = {
    //     firstName: '',
    //     lastName: '',
    //     city: '',
    //     state: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //     priInst: '',
    //     priSkill: '',
    //     secInst: '',
    //     secSkill: '',
    //     terInst: '',
    //     terSkill: '',
    //     bio: '',
    //     influences: '',
    //     seeking: '',
    // };
    // const [reg, setReg] = useState(initialState);
    // const [errors, setErrors] = useState(initialState);

    // const handleInputChange = e => {
    //     setReg({
    //         ...reg,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     axios
    //         .post('http://localhost:8000/api/register', reg, {
    //             withCredentials: true,
    //         })
    //         .then(res => {
    //             if (res.data.msg) {
    //                 setReg(initialState);
    //                 console.log('Navigating');
    //                 navigate('/dashboard');
    //             } else {
    //                 console.log(res.data);
    //                 setErrors(res.data);
    //             }
    //         })
    //         .catch(err => {});
    // };

    return (
        <div className="container mt-5">
            <form onSubmit={register}>
                <div className="form-group row">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name:"
                        className="form-control col-5 mr-5"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    {/* <span className="text-danger">
                        {errors.firstName ? errors.firstName.message : ''}
                    </span> */}
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name:"
                        className="form-control col-5"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                    />
                    {errors?.lastName && (
                        <span className="text-error">
                            {errors.lastName?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="text"
                        name="city"
                        placeholder="City:"
                        className="form-control col-5 mr-5"
                        onChange={e => setCity(e.target.value)}
                        value={city}
                    />
                    {/* <span className="text-danger">
                        {err.response.data.errors.name
                            ? err.response.data.errors.name.message
                            : ''}
                    </span> */}
                    <select
                        className="form-control col-5"
                        id="state"
                        name="state"
                    >
                        <option defaultValue>State:</option>
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
                    {/* {errors?.lastName && (
                        <span className="text-error">
                            {errors.lastName?.properties?.message}
                        </span>
                    )} */}
                </div>
                <div className="form-group row">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email:"
                        className="form-control"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    {errors?.email && (
                        <span className="text-error">
                            {errors.email?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password:"
                        className="form-control"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    {errors?.password && (
                        <span className="text-error">
                            {errors.password?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="password"
                        name="c_password"
                        placeholder="Confirm Password:"
                        className="form-control"
                        onChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                    {errors?.confirmPassword && (
                        <span className="text-error">
                            {errors.confirmPassword?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="text"
                        name="priInst"
                        placeholder="Primary Instrument:"
                        className="form-control col-7 mr-4"
                        onChange={e => setPriInst(e.target.value)}
                        value={priInst}
                    />

                    <select
                        name="priSkill"
                        className="custom-select col-4 text-muted"
                    >
                        <option defaultValue>Skill:</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                        <option value="professional">Professional</option>
                    </select>
                    {errors?.lastName && (
                        <span className="text-danger">
                            {errors.lastName?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="text"
                        name="secInst"
                        placeholder="Secondary Instrument:"
                        className="form-control col-7 mr-4"
                        onChange={e => setSecInst(e.target.value)}
                        value={secInst}
                    />
                    {errors?.secInst && (
                        <span className="text-error">
                            {errors.secInst?.properties?.message}
                        </span>
                    )}
                    <select
                        name="secSkill"
                        className="custom-select col-4 text-muted"
                    >
                        <option defaultValue>Skill:</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Expert</option>
                        <option value="4">Professional</option>
                    </select>
                    {errors?.secSkill && (
                        <span className="text-error">
                            {errors.secSkill?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <input
                        type="text"
                        name="terInst"
                        placeholder="Tertiary Instrument:"
                        className="form-control col-7 mr-4"
                        onChange={e => setTerInst(e.target.value)}
                        value={terInst}
                    />
                    {errors?.terInst && (
                        <span className="text-error">
                            {errors.terInst?.properties?.message}
                        </span>
                    )}
                    <select
                        name="terInst"
                        className="custom-select col-4 text-muted"
                    >
                        <option defaultValue>Skill:</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Expert</option>
                        <option value="4">Professional</option>
                    </select>
                    {errors?.secInst && (
                        <span className="text-error">
                            {errors.secInst?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <textarea
                        name="bio"
                        className="form-control"
                        placeholder="Bio:"
                    ></textarea>
                </div>
                <div className="form-group row">
                    <textarea
                        name="influences"
                        className="form-control"
                        placeholder="Influences:"
                    ></textarea>
                </div>
                <div className="form-group row">
                    <select name="seeking" className="custom-select text-muted">
                        <option defaultValue>Seeking:</option>
                        <option value="1">Band Member</option>
                        <option value="2">Jam</option>
                        <option value="3">Teacher</option>
                        <option value="4">Professional</option>
                    </select>
                    {errors?.seeking && (
                        <span className="text-error">
                            {errors.seeking?.properties?.message}
                        </span>
                    )}
                </div>
                <div className="form-group row">
                    <button
                        type="submit"
                        className="btn-lg btn-primary col-sm-8 mx-auto"
                        id="landing_btn"
                    >
                        JOIN DATABASE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegForm;
