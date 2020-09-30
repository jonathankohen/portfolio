import React from 'react';

const LoginForm = () => {
    return (
        <div className="container mt-5">
            <form action="/create" method="post">
                <h2 className="mt-5 mb-3 text-light text-center">Log in</h2>

                <input
                    type="email"
                    name="email"
                    className="form-control my-2 col-3 mx-auto"
                    placeholder="Email"
                />

                <input
                    type="password"
                    name="password"
                    className="form-control col-3 mx-auto"
                    placeholder="Password"
                />

                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="btn-primary btn-lg"
                        id="landing_btn"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
