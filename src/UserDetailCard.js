import React from 'react';

class UserDetailCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card"
                style={{
                    marginTop: 10,
                    maxWidth: 350,
                    padding: 10,
                    border: "2px solid red"
                }}>
                <div className="name">
                    Name: {this.props.name}
                </div>
                {this.props.gender &&
                    <div className="name">
                        Gender: {this.props.gender}
                    </div>}
                <div className="age">
                    Age: {this.props.age}
                </div>
                <div className="address">
                    City: {this.props.city}
                </div>
            </div>
        );
    }
}

export default UserDetailCard;