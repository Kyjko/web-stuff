import React from 'react';
import {Route} from "react-router-dom";
import Auth from "./Auth";
import {Redirect} from "react-router-dom";

const Protected = ({component: Component, ...rest}) => {
    return(
        Auth.authed ? 
       (<Route {...rest} render= {
            (props) => {
                return <Component {...props} />;
            }
       } />) : (
           <Redirect to={{
                pathname: "/login",
                state: {message: Auth.message}
            }}/>
       )
    );
}

export default Protected;
