import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
import './App.css';
import Inventory from './Inventory/inventory.js'
import Contact from './Contact/contact.js'
import Nav from './Navbar/navbar.js'
import Footer from './Footer/footer.js'
import Home from './Home/home.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/inventory" component={Inventory}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer></Footer>
        </BrowserRouter>
    );
  }
}

export default App;
>>>>>>> 7caefd3ee92ff75a8c6f4817e30d89a6ef8de87e
