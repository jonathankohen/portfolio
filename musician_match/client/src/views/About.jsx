import React from 'react';
import { Link } from '@reach/router';

export default function About() {
    return (
        <div className="container">
            <div className="row">
                <div
                    className="jumbotron shadow-lg col-12 mx-auto"
                    id="landing_hero"
                >
                    <h1 className="display-3 font-weight-bolder">
                        Bringing Musicians Together!
                    </h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius amet voluptas dignissimos molestiae voluptate
                        officia expedita minus eum. Ab dignissimos voluptates
                        similique ratione illum soluta reiciendis hic cumque
                        quisquam labore.
                    </p>
                    <hr className="my-2" />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Atque explicabo sed et perferendis eum delectus
                        modi id, sit eius facilis inventore. Provident voluptas
                        architecto, soluta officia voluptatem ullam alias
                        accusamus! Sign up below!
                    </p>
                    <Link
                        to="/"
                        className="btn btn-primary btn-lg shadow btnLight"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Fun heading</h4>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eaque doloribus nemo, maxime id, recusandae
                            eos dolores adipisci eius laboriosam ratione
                            repudiandae? Veniam, ullam magni repudiandae
                            eligendi mollitia perferendis quis illo. Lorem ipsum
                            dolor sit amet consectetur adipisicing elit. Eaque
                            doloribus nemo, maxime id, recusandae eos dolores
                            adipisci eius laboriosam ratione repudiandae?
                            Veniam, ullam magni repudiandae eligendi mollitia
                            perferendis quis illo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
