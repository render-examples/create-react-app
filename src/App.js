import React from 'react'
import {useQuery} from 'react-query';

import logo from './logo.svg';
import './App.css';
import {sayHelloWorld} from "./api/helloWorld";

function App() {
    const query = useQuery('hello_world', sayHelloWorld);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {query.isLoading ? "Loading..." : query.isError ? "Error..." :
                        query.data}
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
