import React from 'react';
import { Redirect } from 'react-router-dom'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:'',
            loggedIn:false
        }
    }
    onChange = e => {
        this.setState({
            [e.target.name]:e.target.value
          });
    }
    validate = v => {

        v.preventDefault()
        const {userName, password} = this.state
        if( userName.length === 0 )
            return alert("enter email")
        if( password.length === 0 )
            return alert("enter password")
        if( userName.length > 0  && password.length >0 ){
           
            var body = {
                "email":userName,
                "password":password
            }
            fetch("http://localhost:8080/login",body)
            .then(res => res.json())
            .then((result) => {
                console.log(result)
            })
            .catch((e)=>alert(e))

        }
        else{
            return alert("Invalid username or password")
        }
        
    }
    
    render(){
        console.log(this.state.loggedIn)
        if(this.state.loggedIn){
            return <Redirect to="/home" />
        }
        return (
            <div className="login-box">
                <form className="login-form" >
                  <input type="email" placeholder="enter Email ID" name="userName" value={this.state.userName} onChange={this.onChange} />
                  <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                  <button onClick={this.validate}>LOGIN</button>
                </form>   
            </div>
        )
    }
    
}
export default Login;