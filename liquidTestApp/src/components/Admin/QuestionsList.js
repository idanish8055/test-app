import FullWidthSection from "../UI/FullWidthSection";
import QuestionItem from "./QuestionItem";

const QuestionsList = (props) => {
    const questions = props.questions;

    const questionLists = questions.map((question, index) => {
       return <QuestionItem key={question.id} question={question.question} index={index}/>;
    }); 

    console.log(questions);
    return(
        <FullWidthSection>
            {questionLists}
        </FullWidthSection>
    );
}

export default QuestionsList;