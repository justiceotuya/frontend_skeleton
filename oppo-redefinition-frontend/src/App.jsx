import React from 'react';
import logo from './logo.svg';
import './App.css';
import { STRINGS } from './constant';

const {
    EDIT,
    LEARN_REACT,
    SAVE_TO_RELOAD,
} = STRINGS;

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {EDIT}

                {SAVE_TO_RELOAD}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {LEARN_REACT}
            </a>
        </header>
    </div>
);

export default App;
