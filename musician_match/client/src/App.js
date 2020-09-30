import React, { useState } from 'react';
import { Router } from '@reach/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Navbar from './components/Navbar';
import Reg from './views/Reg';
import Main from './views/Main';
import Login from './views/Login';
import About from './views/About';
import Show from './views/Show';
import Edit from './views/Edit';

function App() {
    const [logged, setLogged] = useState(null);
    return (
        <div className="App">
            <Navbar logged={logged} setLogged={setLogged} />
            <Router>
                <Reg path="/" setLogged={setLogged} />
                <Login path="/login" setLogged={setLogged} />
                <Main path="/users" logged={logged} />
                <About path="/about" />
                <Show path="/user/:id" />
                <Edit path="/update/user/:id" logged={logged} />
            </Router>
        </div>
    );
}

export default App;
