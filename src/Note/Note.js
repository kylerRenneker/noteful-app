import React, { Component } from 'react';

class Note extends Component {
    render() {
        console.log('props in the Note component: ', this.props)
        return (
            <>
            <h3>{this.props.name}</h3>
            <p>{this.props.dateModified}</p>
            </>
        )
    }
}

export default Note;