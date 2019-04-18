import React, { Component } from 'react';

class NotePageMain extends Component {
    render() {
    console.log(this.props)
        return (
            <section>
                <ul>
                    <li>
                        <Note />
                    </li>
                </ul>
            </section>
        );
    }
}

export default NotePageMain;