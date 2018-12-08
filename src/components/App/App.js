import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from '../Home/Home'
import NavBar from '../Navbar.js/Navbar'
import 'typeface-roboto';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import About from '../About/About.js'

class App extends Component {

  // Once everything is ready start the processing
  componentDidMount(){
    console.log('in component did mount');
    // this.getGallery();
  }

  // Render the DOM
  render() {
    return (
      // <Grid container alignItems="center"
      <Router>
        <div className="App">
          <CssBaseline />
          <NavBar />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  } // end render

} // end App

export default App;
