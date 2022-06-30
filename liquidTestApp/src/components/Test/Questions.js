import QuesItem from "./QuesItem";
import SectionMedium from '../UI/SectionMedium';
import classes from '../UI/Card.module.css';
import { useState } from "react";
import { Link } from "react-router-dom";
const Questions = (props) => {
    const questions = props.questions;
    const currentQues = props.quesNum;
    const question = questions[currentQues];
    const [formSubmit, setFormSubmit] = useState(false);
    const [option, setOption] = useState("");

    const getSelectedOption = (value) => {
        setOption(value);
    }

    const content = <QuesItem key={currentQues} ques={question.question} index={currentQues} setOption={getSelectedOption}/>;
    const formHandler = (_event) => {
        _event.preventDefault();
        if(props.quesNum+1 < questions.length){
            props.setQuesNum(props.quesNum+1);
            props.setAns(option);
        }
        else{
            props.setAns(option);
            setFormSubmit(true);
        }
    }

    return(
        <form onSubmit={formHandler}>
            <SectionMedium>
                {formSubmit ? "" : <div className={classes.container}>{content}</div>}
                {formSubmit ? "" : <button>{currentQues === questions.length-1 ? "Submit" : "Next"}</button>}
                {formSubmit ? <p>Your details has been saved. You can check the result from the navigation.<Link to="/result">Result</Link></p> : ""}
            </SectionMedium>
        </form>
        );
}

export default Questions;