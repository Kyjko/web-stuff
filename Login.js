import Auth from "./Auth";
import React from 'react';
const sha1 = require("js-sha1");


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const username = e.target.elements["username"].value;
        const oPassword = e.target.elements["password"].value;
        const ePassword = sha1(oPassword);
        Auth.login(username, ePassword);
        this.props.history.push("/staff");
            
    }

    render(){
        return(
            <div className="login-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input name="username" placeholder="username" type="text" />
                    <input name="password" placeholder="password" type="password" />
                    <input type="submit" value="Login" />

                </form>
                
            </div>
        );
    }
}

export default Login;
