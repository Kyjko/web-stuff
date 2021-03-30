import React from 'react';
import Auth from "./Auth";

class Staff extends React.Component {

    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        Auth.logout();
        this.props.history.push("/login");
    }

    render() {
        return(
            <div>
                Welcome to the Staff Page {Auth.message}
                <button onClick={this.onLogout}>Logout</button>
            </div>
        );
    }
}

export default Staff;
