import React, { useContext } from "react"
import './Welcome.css';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {ContextProvider} from "../components/ContextProvider"

function Welcome(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const history = useHistory();
    const context = useContext(ContextProvider)

    const onSubmit = data => {
        context.setAuthorizationTrue();
        history.push('/quiz')
    };
    

    return (
        <div className = "welcome-container" > 
            <div className="aligncenter" >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="custom-input" 
                           {...register('fullname', { 
                               required: "This field is required",
                               minLength: {value:4,message:"Name must be atleast 4 letters"}
                            })}
                           type="text" 
                           placeholder = "Enter your Name.."  />
                    {errors.fullname && <span className="error-content" >{errors.fullname.message}</span>}
                    <input
                            className="custom-input" 
                            {...register('email' ,{
                              required: "This field is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                              }
                            })}
                            placeholder = "Enter your Email.."
                    />
                        {errors.email && <span className="error-content" >{errors.email.message}</span> }
                    <button className="start-button" type="submit" > Start</button>
                </form>
            </div>
        </div>
    )

    
}

export default Welcome