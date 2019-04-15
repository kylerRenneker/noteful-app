import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from '../dummyStore';
import FolderNavLinks from '../FolderNavLinks/FolderNavLinks';
import NoteListMain from '../NoteListMain/NoteListMain';

class App extends Component {
  state = {
    STORE
  }
  

  render() {
    console.log(this.state.STORE)
    const { folders, notes } = this.state.STORE
    console.log(folders, notes)
    return (
      <div className="App">
        <header>
          <Link to='/'>Noteful</Link>
        </header>
        <nav>
          <Route exact path='/' render={() => <FolderNavLinks folders={folders} notes={notes}/>}></Route>
          <Route path='/folder/:folderId' render={(props) => <FolderNavLinks folders={folders} notes={notes} {...props}/>}></Route>
        </nav>
        <main>
          <Route path='/' render={(props) => <NoteListMain folders={folders} notes={notes} {...props}/>}></Route>
          <Route path='/folder/:folderId' render={(props) => <NoteListMain folders={folders} notes={notes} {...props}/>}></Route>
        </main>
      </div>
    );
  }
}

export default App;
