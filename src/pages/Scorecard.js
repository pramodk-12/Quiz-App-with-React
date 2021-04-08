import React, { useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import {ContextProvider} from "../components/ContextProvider";
import "./Scorecard.css";

function Scorecard() {
    const context = useContext(ContextProvider);
    const hist = useHistory()

    const goHome= () => {
        context.setAuthorizationFalse();
        context.changeScore(-context.score);
        hist.push('/home')
    }

    return (
        <div className="loading" >
            <h2 className="score" >Your Score is {context.score ? context.score : 0}/10 </h2>
            <div className="button-div1" >
            <button className="home-button" onClick={goHome} >Home</button>
            </div>
        </div>
    )
}   

export default Scorecard