import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Welcome from './components/welcome';
import Test from './components/test';
import Nav from './components/nav';


const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));
