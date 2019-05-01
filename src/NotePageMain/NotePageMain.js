import React, { Component } from 'react';
import Note from '../Note/Note';
import BackButton from '../BackButton/BackButton';

class NotePageMain extends Component {

    getNote(notes = [], noteId) {
        console.log(notes)
        const note = notes.find(note => note.id === noteId)
        return note
    }

    render() {
        console.log(this.props)
        const { notes = [] } = this.props
        console.log(notes)
        const { noteId } = this.props.match.params
        const note = this.getNote(notes, noteId)
        console.log(note);
        return (
            <>
                <BackButton {...this.props} />
                <section>
                    <Note id={note.id} name={note.name} modified={note.modified} />
                    <div>{note.content.split(/\n \r|\n/).map((para, i) =>
                        <p key={i}>{para}</p>
                    )}</div>
                </section>
            </>
        );
    }
}

export default NotePageMain;