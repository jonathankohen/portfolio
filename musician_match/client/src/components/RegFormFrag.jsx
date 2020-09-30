import React from 'react';

export default function RegFormFrag(props) {
    const { msg, bio, errors, seeking, handleInputChange } = props;

    return (
        <>
            <div className="row mb-2">
                <div className="col">
                    <textarea
                        name="bio"
                        value={bio}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="3"
                        placeholder={`Bio: ${msg} Tell us a little bit about yourself and your influences.`}
                    />
                    <span className="text-danger">
                        {errors.bio ? errors.bio.message : ''}
                    </span>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col">
                    <select
                        className="custom-select"
                        name="seeking"
                        onChange={handleInputChange}
                        value={seeking}
                    >
                        <option defaultValue>Seeking</option>
                        <option value="Band">Band</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Pro">Pro</option>
                        <option value="Jam">Jam</option>
                    </select>
                    <span className="text-danger">
                        {errors.seeking ? errors.seeking.message : ''}
                    </span>
                </div>
            </div>
        </>
    );
}
