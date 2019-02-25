import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import firstPage from './pages/FirstPage/firstPage.js'
import loginPage from './pages/LoginPage/loginPage.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={firstPage}/>
                    <Route path='/login' component={loginPage}/>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
