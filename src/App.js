import Navbar from './components/Navbar';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home';



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

     <div className='content'>
      
       <Switch>

        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/create'>
          <Create/>
        </Route>
        
       </Switch>
     </div>
      
    </div>
    </Router>
    
   
  );
}

export default App;
