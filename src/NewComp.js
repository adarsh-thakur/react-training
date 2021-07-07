// this is a function component
import React from 'react';
import App from './App';
// export function NewComp() {
//     return (
//         <React.Fragment>
//             <div> This is my First component</div>
//             <div> This is my First component div</div>
//         </React.Fragment>
//     )
// }


class NewComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <div>Hi {this.props.userName} Welcome</div>
                {this.props.gender && <div>You are a {this.props.gender}</div>}
            </React.Fragment>
        )
    }
}
export default NewComp;