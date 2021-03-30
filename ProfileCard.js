import React from 'react';
import {Link} from "react-router-dom";

const ProfileCard = props => {
    return(
        <div className="pointer-wrapper">
            {props.active === 1 ? (
                <Link className="pointer-link" key={`${props.customer_id}`} to={`/person/${props.customer_id}`}>
                    {props.first_name} {props.last_name} <h4>view profile</h4>
                </Link>
            ) : (
                <Link to="/" className="pointer-link">{props.first_name} {props.last_name} <h4 className="no-profile">inactive</h4></Link>
            )}        
        </div>
    );
}

export default ProfileCard;
