import React from "react";
import "./App.css";

class Inspect extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
      fetch(`/api/people?id=${this.props.match.params.id}`).then(res => res.json()).then(data => {
        this.setState({item: data[0]});
      });
    }
  
    render() {
        const item = this.state.item;
      return (
      <div className="inspectWrapper">
        <h1>{item.first_name} {item.last_name}</h1>
      <h4 className="city-description">{item.city} - {item.country}</h4>
      <h4>{item["zip code"]}</h4>
        <h4>{item.email}</h4>
      </div>
      );
    }
  }
  
  export default Inspect;