import './App.css';
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Todo } from './Home';
import { Contact } from './About';

library.add(faTrash);


function App() {
  return (
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Switch>
    <Route exact path="/" component={Todo} />
  <Route path="/About" component={Contact} />
</Switch>
  </Router>
</React.Fragment>
  );
}

export default App;
