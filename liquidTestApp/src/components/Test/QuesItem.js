import SectionMedium from '../UI/SectionMedium';
import classes from '../UI/Card.module.css';

const QuesItem = (props) => {
    const options = props.ques.options;
    const questionNumber = +(props.index+1);

    const onRadioChangeHandler = (_event) => {
        props.setOption(_event.target.value);
    }

    const optionsList = options.map((option, index) => {
        return <div key={`${props.index}-${option}`}>
                    <input type="radio" name={`option${questionNumber}`} onChange={onRadioChangeHandler} value={option}/>
                    <label htmlFor={option}>{option}</label>
                    <br/>
                </div>;
    });
    return(<SectionMedium>
                <div className={classes.container}>
                    <b>{questionNumber}- {props.ques.question}</b>
                    {optionsList}
                </div>
            </SectionMedium>
        );
}
export default QuesItem;