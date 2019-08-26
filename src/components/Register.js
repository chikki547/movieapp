import React from 'react';
import { get } from 'https';


class Register extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:'',
            firstName:'',
            lastName:''
            // repassword:'',
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
                return alert("please fill all fields")
            if( password.length === 0 )
                return alert("please fill all fields")
            if(userName.length > 0  && password.length >0)
            {
                var body={
                    "email":userName,
                    "password":password
                }
                fetch("http://localhost:8080/registration",{
                    method: get,
                    body : JSON.stringify(body)
                    
                })
                .then(res => res.json())
                .then((result) => {
                    console.log(result)
                })
            }
    }
    render(){

        return (
            <div className="signup-box">      
                <form className="signup-form" method="post">
                <input type="email" placeholder="enter Email ID" name="userName"  value={this.state.userName} onChange={this.onChange}/>
                <input type="text" placeholder="enter first name" name="firstName"  value={this.state.firstName} onChange={this.onChange}/>
                <input type="text" placeholder="enter last name" name="lastName"  value={this.state.lastName} onChange={this.onChange}/>
                <input type="password" placeholder="enter password" name="password" value={this.state.password} onChange={this.onChange}/>
                {/* <input type="password" placeholder="re-enter password" name="re-password" value={this.state.repassword} onChange={this.onChange}/> */}
                <button onClick={this.validate}>SIGN UP</button>
                </form>
            </div>
        );
    }
}
export default Register;
