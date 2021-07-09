import React from 'react';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            city: '',
            age: '',
            gender: ''
        };
    }
    render() {
        return (
            <>
                <h3>User Input Component</h3>
                <div>Type Name here:</div>
                <input type="text" value={this.state.userName} onChange={(e) => this.onUserNameChange(e)} />
                <div>Type City here:</div>
                <input type="text" value={this.state.city} onChange={(e) => this.onCityChange(e)} />
                <div>Type Gender here:</div>
                <input type="text" value={this.state.gender} onChange={(e) => this.onGenderChange(e)} />
                <div>Type Age here:</div>
                <input type="number" value={this.state.age} onChange={(e) => this.onAgeChange(e)} />
                <div style={{ marginTop: '10px' }}>
                    <button onClick={this.submitUser}>Submit User</button>
                    <button onClick={this.resetUser}>Reset Input</button>
                </div>
                {/* <div>Hey User {this.state.userName}</div>
                <button onClick={this.resetUserName}>Reset Input</button> */}
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
    onAgeChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    onGenderChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }
    resetUser = () => {
        this.setState({
            userName: '',
            city: '',
            age: '',
            gender: ''
        })
    }
    submitUser = () => {
        let { userName, city, age, gender } = this.state;
        this.props.userAdded({ name: userName, city, age, gender });
        this.resetUser();
    }
}

export default UserInput;