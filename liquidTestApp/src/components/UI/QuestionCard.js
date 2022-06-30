import classes from './Section.module.css';

const QuestionCard = (props) => {
  return <section className={classes.quesCard}>{props.children}</section>;
};

export default QuestionCard;
