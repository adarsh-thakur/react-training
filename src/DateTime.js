import React from 'react';

export default class DateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            userName: 'Adarsh'
        };
        setInterval(this.updateDate, 1000);
        setTimeout(() => {
            this.setState({
                userName: 'Adarsh Thakur'
            })
        }, 5000);
    }
    updateDate = () => {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <>
                <h1>This will show you Real Time Date</h1>
                <h5>Hello {this.state.userName}</h5>
                <div>{this.state.date.toString()}</div>
            </>
        )
    }
}
