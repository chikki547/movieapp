import React from 'react';
// import Login from './Login';

class Header extends React.Component {

  constructor(){
    super()
    this.state = { 
      display:false
    }
  }
  
  render(){
    // console.log(this.props.isLoggedIn)
    return (

          <header className="App-header">
            MOVIE DATA ANALYSIS 
            <form align="right" id="logout">
              <button style={{display: this.props.isLoggedIn ? 'none' : 'none'}}>logout</button>
            </form>
            
          </header> 
            
    );
  }
}

export default Header;
