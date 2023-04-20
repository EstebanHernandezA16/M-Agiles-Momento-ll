import React, { Fragment } from "react";
import './Home.css'

export const Home = () =>{
    const URL_BANNERR =
    "https://firebasestorage.googleapis.com/v0/b/proyecto-scrum-momento-ll.appspot.com/o/bannerRedesign.jpg?alt=media&token=cd908887-ac97-4c33-b888-8dab6e87117d";
    return(
        <Fragment>
            <div className="container">
            <h1>BIENVENIDO AL HOME</h1>
            <img className="bannerHome" src={URL_BANNERR} alt="" />
            </div>
            
            
           
        </Fragment>
    );
}