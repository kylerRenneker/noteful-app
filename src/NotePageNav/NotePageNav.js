import React, { Component } from 'react';
// import backButton from '../backButton/backButton';


// const findFolder = (folders, folderId) => (
//     folders.find(folder => folder.id === folderId)
// )

// const findNote = (notes, noteId) => (
//     notes.find(note => note.id === noteId)
// )

class NotePageNav extends Component {

    findFolder(folders = [], folderId) {
        return folders.find(folder => folder.id === folderId)
    }

    findNote(notes = [], noteId) {
        return notes.find(note => note.id === noteId)
    }

    render() {
        const { notes, folders } = this.props;
        const { noteId } = this.props.match.params;
        const note = this.findNote(notes, noteId);
        const folder = this.findFolder(folders, note.folderId);
        return (
            <div>
                {/* <backButton /> */}
                <h2>{folder.name}</h2>
            </div>
        );
    }
}

export default NotePageNav;