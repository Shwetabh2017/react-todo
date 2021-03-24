import db from './firebase.config';
import React,{useState,useEffect} from 'react';
import './App.css';
import Todo from  './Todo'

function Content() {
  const [blogs,setBlogs]=useState([])
 

    let textInput = React.createRef();

  useEffect(() => {
    //fetchdata();
   db.collection('todo')
   .onSnapshot(snapshot => {
      // setBlogs(snapshot.docs.map(doc =>  doc.data()))
       setBlogs(snapshot.docs.map(doc => ({...doc.data(), id: doc.id  })))


  })
  }, [])

    //  const fetchdata = async () =>{
    //      const data = await db.collection('todo').get();
    //    //  setBlogs(data.docs.map(doc => doc.data()))
    //    console.log(data)
    //      setBlogs(data.docs.map(doc => ({...doc.data(), id: doc.id  })))
    //  }

 const addusers = () =>{
          db.collection('todo')
         .add({
            todo: textInput.current.value
         })
     
 }




  return (
    <div>

    
    <div className = 'flex-container' >
        {blogs.map((user) => ( 
        <div > <Todo data = {user} key = {user.id}/> </div>
      ))}
       
       </div>
     <input ref={textInput} placeholder="Type a todo list item..."></input>

      <button onClick = {addusers}>Add data</button>
    </div>
  );
}

export default Content;

