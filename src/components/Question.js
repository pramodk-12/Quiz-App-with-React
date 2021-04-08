import React, { useEffect,memo, useState,useContext } from "react"
import "./Question.css"
import { ContextProvider } from "./ContextProvider";
import { useHistory } from "react-router";


function Question(props) {
    const {ques,quesNo,changeNo} = props
    const [ans,setAns] = useState("")
    const [options,setOptions] = useState([])
    const context = useContext(ContextProvider);
    const history = useHistory();
    const clearques = ques.question.replaceAll("&#039;","'").replaceAll("&quot;","\"");

    useEffect(() => {
        let temp = [...ques.incorrect_answers]
        const rand = Math.floor(Math.random() * 4);
        temp.splice(rand, 0, ques.correct_answer);
        setOptions(temp)
    },[props.quesNo]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (event) => {
        const {value} = event.target
        setAns(value)
    }

    const quesSubmit = () => {
        if (ans === ques.correct_answer) {
            context.changeScore(1);
        }
        changeNo();
    }

    const onSubmit = () => {
        history.push('/scorecard')
    }

    const optionButtons = options.map( option => <label className="option" key={option} > <input type="radio" checked={option === ans} onChange={handleChange} name="answer" value={option}/> {option}  </label> )


    return (
        <div className = "question-div" >
            <h2 className="question" >{quesNo}. {clearques} </h2>
            <div className="answers-div">
                {optionButtons}
            </div>
            <div className="button-div" >
                {
                quesNo !== 9 ? <button className="next-button" onClick={quesSubmit} >Next</button> :
                <button className="next-button" onClick={onSubmit} >Submit</button>
                }
                
            </div>
        </div>
    )
}

export default memo(Question)