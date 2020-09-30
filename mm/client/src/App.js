import React, { useState } from 'react';
import { Router } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Nav from './components/Nav';
import Register from './views/Register';
import Login from './views/Login';
import Main from './views/Main';

export default function App() {
    const [logged, setLogged] = useState(null);

    return (
        <div className="App">
            <Nav />
            <Router>
                <Register path="/" setLogged={setLogged} />
                <Login path="/login" setLogged={setLogged} />
                <Main path="/dashboard" logged={logged} setLogged={setLogged} />
            </Router>
        </div>
    );
}
