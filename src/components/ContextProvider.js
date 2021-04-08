import React,{createContext, useEffect, useState} from "react"

const ContextProvider = createContext()

function StateContextProvider(props) {
    const [authorized,setAuthorized] = useState(false)
    const [quizdata,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [score,setScore] = useState(0)

    const setAuthorizationTrue = () => {
        setAuthorized(true)
    }

    const setAuthorizationFalse= () => {
        setAuthorized(false)
    }

    const changeScore = (num) => {
        setScore(state => state+num )
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0, 10)
      }
    
    

    useEffect(() => {
        setLoading(true)
        fetch('https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => {
                setData(shuffle([...data.results]))
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
            })
    },[])


    return(
        <ContextProvider.Provider value = {{authorized,setAuthorizationTrue,setAuthorizationFalse,data:quizdata,loading,changeScore,score}} >
            {props.children}
        </ContextProvider.Provider>
    )
}

export {StateContextProvider, ContextProvider}