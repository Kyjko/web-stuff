import React from 'react';

class AddProfile extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            message: ""
        }
    } 

    handleSubmit(e) {
        e.preventDefault();
        const first_name = e.target.elements["first-name"].value;
        const last_name = e.target.elements["last-name"].value;
        const email = e.target.elements["email"].value;

        fetch(`/add?first_name=${first_name}&last_name=${last_name}&email=${email}`).then(res => res.text())
        .then(data => this.setState({
            message: data
        }));
        
    }

    render() {
        return (
            <div className="add-new-profile-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="first name" name="first-name" />
                    <input type="text" placeholder="last name" name="last-name" />
                    <input type="text" placeholder="email address" name="email" />
                    <input type="submit" value="Add" />
                    <h3>{this.state.message}</h3>
                </form>
                
            </div>
        );
    }
    
}

export default AddProfile;