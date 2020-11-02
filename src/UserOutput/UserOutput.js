import React from 'react';
import '../UserOutput/UserOutput.css'
const UserOutput=(props)=>{
    return (
        <div className="UserOutput">
            <p>I am {props.userName} Practising react basics</p>
            <p>Doing the assesment</p>
        </div>
    );
}

export default UserOutput