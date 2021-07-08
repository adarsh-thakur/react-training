import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            city: ''
        };
    }
    render() {
        return (
            <>
                <h3>User Input Component</h3>
                <div>Type username here:</div>
                <input type="text" value={this.state.userName} onChange={(e) => this.onUserNameChange(e)} />
                <div>Type City here:</div>
                <input type="text" value={this.state.city} onChange={(e) => this.onCityChange(e)} />
                <div>Hey User {this.state.userName}</div>
                <button onClick={this.resetUserName}>Reset Input</button>
            </>
        );
    }
    onUserNameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }
    onCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    resetUserName = () => {
        this.setState({
            userName: ''
        })
    }
}

export default UserInput;