import React from 'react';
import '../UserInput/UserInput.css';
const UserInput= (props) =>{
    return(
        <div className="UserInput">
            <input className="field" type="text" onChange={props.changed} value={props.userName}/>
        </div>
    );
}

export default UserInput;