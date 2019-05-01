import React, { Component } from 'react';

class BackButton extends Component {
    render() {
        return (
            <>
                <button onClick={this.props.history.goBack}>Back</button>
            </>
        );
    }
}

export default BackButton;