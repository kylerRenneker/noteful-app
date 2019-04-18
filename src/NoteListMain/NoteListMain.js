import React, { Component } from 'react';
import Note from '../Note/Note';

class NoteListMain extends Component {
    render(){
        console.log('props in NoteListMain: ', this.props)
        const notes = this.props.notes.filter((note) => {
            if(!this.props.match.params.folderId){
                return note
            }
            else {
                return note.folderId === this.props.match.params.folderId
            }
        })
        console.log(notes)
        return (
            <ul>
               {notes.map((note) => 
                   <li key={note.id}>
                       <Note name={note.name} dateModified={note.modified}/>
                   </li>
               )}
            </ul>
        );
    }
}

// NoteListMain.defaultProps = {
//     notes: []
// }

export default NoteListMain;