import React from 'react';
import Login from "./Login"
import Register from "./Register"

class LoginRegister extends React.Component {

  constructor(props){
      super(props)
      this.state = { 
        showForm:'Login' ,
        Login:true,
        SIGN:false
      }
      this.showHide=this.showHide.bind(this)
     this.changeContent=this.changeContent.bind(this)
  }
  changeContent (event){
    this.setState({
      showForm: event.target.value,
        SIGN:!this.state.SIGN,
        Login:!this.state.Login
    });
  }
  showHide(){
    if(this.state.showForm === "SIGN UP") {
      
       return <Register />
    } else if(this.state.showForm === "Login"){
      return <Login handleLoginState={this.props.handleLoginState}/>
    }
    return <Login />
  }
  render (){
    return(
      <main className="App-Main">
       
        <div className="login-register">
          

        <input id="login" type="radio" name="tab" value="Login" 
             onChange={this.changeContent }  />
        <label htmlFor="login" style={{backgroundColor: this.state.Login ? 'red' : 'white'}}> LOGIN   </label>
          
         <input id="sign up"type="radio" name="tab" value="SIGN UP" 
             onChange={this.changeContent} checked={this.state.checked}  />
           <label htmlFor="sign up" style={{backgroundColor: this.state.SIGN ? 'red' : 'white'}}> SIGN UP </label>

        
          
          {this.showHide()}
        
        </div>
      </main>
    )
  }
}
export default LoginRegister;
