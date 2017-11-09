import React, { Component } from 'react';
import BarChart from './BarChart';
import './App.scss';

export default class App extends Component {
    render() {
        let data = [];
        for(let i = 0; i < 100; i++) {
            let value = Math.random() * 5 + 3;
            data.push(value);
        }
        return (
            <div className="basic">
                Hello from react!
                <BarChart data={data} size={[500,500]}/>
            </div>
        );
    }
}

