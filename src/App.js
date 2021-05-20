//import './App.css';
import React from 'react';
<<<<<<< Updated upstream
=======
//import ListItems from './Listitems'
>>>>>>> Stashed changes
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
<<<<<<< Updated upstream
//import { Todo } from './Home';
import { Contact } from './About';

library.add(faTrash);

=======
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';


library.add(faTrash);
>>>>>>> Stashed changes

function App() {
  return (
    <React.Fragment>
<<<<<<< Updated upstream
  <Router>
    <NavigationBar />
    <Switch>
   
  <Route path="/About" component={Contact} />
</Switch>
  </Router>
</React.Fragment>
=======
    <Router>
      <NavigationBar />
    </Router>
  </React.Fragment>
>>>>>>> Stashed changes
  );
}

export default App;
