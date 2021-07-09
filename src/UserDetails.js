import React from 'react';
import UserDetailCard from './UserDetailCard';
class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.userDetailsArr = [];
        if (this.props.newUser) {
            this.userDetailsArr.push(this.props.newUser);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newUser) {
            this.userDetailsArr.push(nextProps.newUser);
        }
    }
    render() {
        return (
            <>
                <h3>This is User Details Component</h3>
                {this.userDetailsArr.map(((userDetail, index) => {
                    return (
                        <UserDetailCard
                            name={userDetail.name}
                            age={userDetail.age}
                            city={userDetail.city}
                            gender={userDetail.gender}
                        />
                    )
                }))}
            </>
        );
    }
}

export default UserDetails;


