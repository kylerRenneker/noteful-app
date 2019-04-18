import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FolderNavLinks extends Component {
    render() {
        console.log('props in the FolderNavLinks cmpnt' , this.props)
        return (
            <ul>
                {this.props.folders.map((folder) => 
                    <li key={folder.id}>
                        <Link to={`/folder/${folder.id}`}>
                            <h2>{folder.name}</h2>
                        </Link>
                    </li>
                )}
            </ul>
        );
    }
}

export default FolderNavLinks;
