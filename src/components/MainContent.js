import React from 'react';

import LoginRegister from "./LoginRegister"

class MainContent extends React.Component {

  constructor(props){
      super(props)
  }
  render(){
    return(
        <LoginRegister handleLoginState={this.props.handleLoginState}/>
    )
  }
}
export default MainContent;
