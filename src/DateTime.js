import React from 'react';
import './App.css';

export default class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            date2: new Date(),
        };
        this.timerId = 0;

    }
    updateDate = () => {
        this.setState({
            date: new Date()
        })
    }
    updateDate2 = () => {
        this.setState({
            date2: new Date()
        })
    }
    render() {
        return (
            <div className="wrapper">
                <h1>This will show you Real Time Date</h1>
                <div>Date 1 - {this.state.date.toString()}</div>
                <div>Date 2 - {this.state.date2.toString()}</div>
                <button style={{ marginTop: 20 }} onClick={this.startTheTime}>Start Time Change</button>
                <button style={{ marginTop: 20 }} onClick={this.stopTheTime}>Stop Time Change</button>
                <button style={{ marginTop: 20 }} onClick={this.stopTime2Change}>Stop Time 2 Change</button>
            </div>
        )
    }
    startTheTime = () => {
        this.timerId = setInterval(this.updateDate, 1000);
        this.timerId2 = setInterval(this.updateDate2, 1000);
    }
    stopTheTime = () => {
        clearInterval(this.timerId)
    }
    stopTime2Change = () => {
        clearInterval(this.timerId2)
    }
}
