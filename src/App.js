import './App.css';

import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import Base from './Base'
import Update from './Update';

function App() {
  return (
    <div >        
      
        <Switch>
       <Route exact path = '/' component = {Base}/>   
    
       <Route exact path = '/login'  component = {Login}/>

       <Route exact path = '/update' component = {Update}/>
        </Switch>
    </div>
  );
}

export default App;
