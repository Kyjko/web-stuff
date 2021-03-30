import React from 'react';
import {Link} from "react-router-dom";

const New = props => {
    return(
        <Link className="new-button" to="/new">Add new profile</Link>
    );
}

export default New;