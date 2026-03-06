import { Component } from 'react';
import './App.css';
import {users} from './UserList.js';
function Delete() {
 return(
    <div>
        <p>sample text box</p>
        <button>Delete</button>
    </div>
 )
}
function Component(){
    return(
        <div>
            {Delete}
            <button>Sort by Group</button>
            <button>Sort by ID</button>
            <button>List/Grid</button>
        </div>
            
        
    )
}
export default Component