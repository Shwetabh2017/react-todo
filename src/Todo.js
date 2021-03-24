import React from 'react'
import db from './firebase.config';
import { useHistory} from 'react-router-dom'

function Todo({data}) {

    const history = useHistory();

   // const navigateTo = () => history.push('/update',data={data});

    const navigateTo = () => history.push({
        pathname: '/update',
         appState: {
           id : data.id,
           olddata : data.todo
         }
      });
  
    const deleteuser = () =>{
       // console.log(data.id)
        db.collection('todo')
        .doc(data.id).delete();
    }

   
    return (
        <div>
            <h1>{data.todo}  </h1>
            <button onClick = {deleteuser}>Delete</button>
            <button onClick = {navigateTo} >Update</button>
        </div>
    )
}

export default Todo
