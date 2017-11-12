import React, { Component } from 'react';
import BarChart from './BarChart';
import Experiment from './Experiment';
import './App.scss';

const randomInterval = (avgSeconds) => {
    return Math.floor(-Math.log(Math.random()) * 1000 * avgSeconds);
};

const addData = (data,numItems, avgSeconds) => {
    let n = data.length;
    let t = (n > 0) ? data[n-1].date : new Date();
    for(let k = 0; k < numItems - 1; k++){
        t = new Date(t.getTime() + randomInterval(avgSeconds));
        data.push({date: t});
    }

    return data;
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.addData = this.addData.bind(this);
        this.state =
        {
            data: [addData([], 150, 300)]
        };
    }
    addData() {
        let data = this.state.data;
        data.push(addData([], 150, 300));
        this.setState({
            data
        });
    }
    render() {
       return (
            <div className="basic">
                Hello from react!
                <Experiment 
                data={this.state.data}
                addData={addData}
                width={600}
                height={30}
                 />
                <button id='react-update' onClick={this.addData}>Add Data W. React</button>
                <button id='btn-update'>Add Data</button>
            </div>
        );
    }
}

