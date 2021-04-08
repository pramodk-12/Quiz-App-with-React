import React,{ useContext, useEffect, useState} from "react"
import { ContextProvider } from "../components/ContextProvider";
import "./quiz.css";
import Question from "../components/Question"
import { useHistory } from "react-router";


function Quiz() {
    const [timeLeft, setTimeLeft] = useState(30);
    const [quesNo,setQuesno] = useState(0);
    const context = useContext(ContextProvider);
    const history = useHistory();
    const questions = context.data

    const changeNumber =() => {
        setQuesno(num => num+1)
    }

    
    useEffect(() => {
        if (!timeLeft) {
            history.push('/scorecard')
        };
        const intervalId = setInterval(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className = "timer" >
                <h2>Time Remaining: {timeLeft}</h2>
            </div>
            <div>
                <Question ques ={questions[quesNo]} quesNo = {quesNo} changeNo = {changeNumber} />
            </div>
            

        </div>
    )
}

export default Quiz