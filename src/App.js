import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Method from './Method';

class App extends Component {
    render() {
        const eps = [ 0.1, 0.001, 0.0001, ];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Рябцев Владимир Дмитриевич
                    <br />БИВ144</h1>
                </header>
                <p className="App-intro">
                    <b>100 * (x2 - x1 ^ 2) ^ 2 + (1 - x1) ^ 2</b>
                </p>
                {eps.map(e => {
                    const result = Method(e);
                    const liStyle = {
                        listStyleType: 'none',
                    };
                    return (
                        <p className="App-intro">
                            <ul style = {{
                                padding: 0,
                                margin: 0,
                            }}><u>При эпсилон = <b>{e}</b>:</u>
                                <li style = {liStyle}>Локальный минимум: ({result.x1}, {result.x2})</li>
                                <li style = {liStyle}>Значение градиента: ({result.gradient.i}, {result.gradient.j})</li>
                                <li style = {liStyle}>Кол-во итераций: {result.k}</li>
                                <li style = {liStyle}>Длина градиента: {result.gradLength}</li>
                            </ul>
                        </p>
                    );
                })}
            </div>
        );
    }
}

export default App;
