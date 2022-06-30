import QuestionCard from "../UI/QuestionCard";
import classes from '../UI/Card.module.css';

const QuestionItem = (props) => {
    const {question} = props;
    const {options} = question;

    const optionsList = options.map((option, index) => {
        return <div key={index}>
                    <input type="radio" disabled value={option}/>
                    <label htmlFor={option}>{option}</label>
                    <br/>
                </div>;
    });
    console.log(question);
    return(<QuestionCard>
        <div className={classes.container}>
            <b>{props.index+1}- {question.question}</b>
            {optionsList}
        </div>
    </QuestionCard>);
}

export default QuestionItem;