import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Note extends Component {
    render() {
        console.log('props in the Note component: ', this.props)
        const { name, id, modified } = this.props
        console.log(name, id, modified)
        return (
            <div className="Note">
                <Link to={`/note/${id}`}>
                {name}
                </Link>
                <p>{modified}</p>
            </div>
        )
    }
}

export default Note;