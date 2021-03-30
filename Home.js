import React from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";
import New from "./New";

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        people: []
      };
    }


    componentDidMount() {
      fetch("/api/people").then(res => res.json()).then(data => {
        this.setState({people: data.map(item => (
          {
            customer_id: item.customer_id,
            first_name: item.first_name,
            last_name: item.last_name,
            active: item.active
          }
          ))});
      });
    }
  
    render() {
      return (
      <div className="wall-wrapper">
        <New />
        { this.state.people.length ? (<div>
            {this.state.people.map(item => 
              <ProfileCard
                key={item.customer_id} 
                customer_id={item.customer_id}
                first_name={item.first_name}
                last_name={item.last_name}
                active={item.active}
              />
            )}
        </div>) : (
          <h2 className="no-result">no profiles yet</h2>
        )}
      </div>
      );
    }
  }
  
  export default Home;