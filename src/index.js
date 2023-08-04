import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { User } from './Context/user';

export const Context = createContext(null);


ReactDOM.render(
    <Context.Provider value={{
        user: new User()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')

);