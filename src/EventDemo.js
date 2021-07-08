import React from 'react';
export default class EventDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h6>This is EventDemo Component</h6>
                <button onClick={this.onButtonClick}>Click Me</button>
            </>
        )
    }
    onButtonClick = (event) => {
        alert(' Button is clicked');
    }
}