import React from 'react';
import './App.css';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Dashboard from './Dashboard';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {

  constructor(){
    super()
    this.state ={
      isLoggedIn:false
    }
    this.handleLoginState = this.handleLoginState.bind(this)
  }

  handleLoginState=(event)=>{
    this.setState({
      isLoggedIn:event
    })
    // console.log(this.state.isLoggedIn)
  }
  render(){
    return (
      
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <Router>
          <Route  path="/" exact component={MainContent} handleLoginState={this.handleLoginState} />
          <Route path="/home" component={Dashboard} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
