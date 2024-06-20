import React from 'react'

import logo from './logo.svg';
import './App.css';
import {useNavigate} from "react-router-dom";

export const USER_LS_KEY = "user";

function App() {
    const navigate = useNavigate();

    React.useEffect(() => {
        // go to login page
        const alreadyLoggedIn = localStorage.getItem(USER_LS_KEY) !== null;
        if (!alreadyLoggedIn) {
            navigate("/login");
        }

        // TODO: else -> go to user's page
    }, [navigate]);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    hi
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
