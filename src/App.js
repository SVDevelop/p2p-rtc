
import { Router, BrowserRouter, Switch } from 'react-router-dom';
import {Main, Room, NotFound404} from './components'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch >
      <Router exect path='/room/:id' component={Room} />
      <Router exect path='/' component={Main} />
      <Router component={NotFound404} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
