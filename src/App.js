import React from 'react';
import './App.css';
import UserDetails from './UserDetails';
import DateTime from './DateTime';
import EventDemo from './EventDemo';
import UserInput from './UserInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: undefined
    };
  }
  render() {
    return (
      <>
        {/* <DateTime />
        <EventDemo /> */}
        <UserInput userAdded={(data) => this.onNewUserAdd(data)} />
        <UserDetails newUser={this.state.newUser} />
      </>
    );
  }
  onNewUserAdd = (data) => {
    this.setState({
      newUser: data
    })
  }
}
// 2 ways - Functional Component and Class Based Components

export default App;
