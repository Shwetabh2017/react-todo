import React from 'react'
import db from './firebase.config';
import { useHistory} from 'react-router-dom'

function Update(props) {

    let textInput = React.createRef();
    const history = useHistory();

    const update = () =>{
        db.collection('todo')
        .doc(props.location.appState.id).update({
            todo: textInput.current.value
           
         })
         goto();
    }

    const goto = () => history.push('/');
   
    return (
        <div className = 'Login-component'>
            <input type = 'text' placeholder = {props.location.appState.olddata}/>
            <input ref={textInput} type = 'text'/>
            <button onClick = {update}>Update</button>
        </div>
    )
}

export default Update
