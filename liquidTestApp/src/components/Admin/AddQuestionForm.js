import classes from './Form.module.css';
import SectionMedium from '../UI/SectionMedium';
import { useState } from 'react';

const AddQuestionForm = (props) => {
  const [enableBtn, setEnableBtn] = useState(false);
  const [question, setQuestion] = useState("");
  const [opt1, setopt1] = useState("");
  const [opt2, setopt2] = useState("");
  const [opt3, setopt3] = useState("");
  const [opt4, setopt4] = useState("");
  const [answer, setAnswer] = useState("");
  
  const questionHandler = (event) => {
    setQuestion(event.target.value);
    if(question !== "" && question.length > 0 && opt1 !== "" && opt2 !== ""){
      setEnableBtn(true);
    }
  }
  
  const opt1Handler = (event) => {
    if(question !== "" && question.length > 0 && opt1 !== "" && opt2 !== ""){
      setEnableBtn(true);
    }
    setopt1(event.target.value);
  }

  const opt2Handler = (event) => {
    if(question !== "" && question.length > 0 && opt1 !== "" && opt2 !== ""){
      setEnableBtn(true);
    }
    setopt2(event.target.value);
  }

  const opt3Handler = (event) => {
    setopt3(event.target.value);
  }

  const opt4Handler = (event) => {
    setopt4(event.target.value);
  }

  const answerHandler = (event) => {
    setAnswer(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const options = [];
    if(question.length !== "" && opt1 !== "" && opt2 !== ""){
      options.push(opt1);
      options.push(opt2);
      if(opt3 !== ""){
        options.push(opt3);
      }
      if(opt4 !== ""){
        options.push(opt4);
      }

      const newQuestionData = {
        "qno": Math.random().toFixed(5),
        "question": question,
        "options": options,
        "answer": answer
      };
      props.addQuestion(newQuestionData);
      setQuestion("");
      setopt1("");
      setopt2("");
      setopt3("");
      setopt4("");
      setAnswer("");
    }
  };

  return (
    <SectionMedium>
      <h2 className={classes.h1}>Add question</h2>
      <SectionMedium>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label>
            Question<br/>
          </label>
          <textarea type='textarea' cols='100' rows='5' name='question' value={question} placeholder='Enter question along with question mark (?)' onChange={questionHandler}/>
        </div>
        <div>
          <label>
            Option 1<br/>
            <input type='text' name='option1' value={opt1} onChange={opt1Handler}/>
          </label>
        </div>
        <div>
          <label>
            Option 2<br/>
            <input type='text' name='option2' value={opt2} onChange={opt2Handler}/>
          </label>
        </div>
        <div>
          <label>
            Option 3<br/>
            <input type='text' name='option3' value={opt3} onChange={opt3Handler}/>
          </label>
        </div>
        <div>
          <label>
            Option 4<br/>
            <input type='text' name='option4' value={opt4} onChange={opt4Handler}/>
          </label>
        </div>
        <div>
          <label>
            Answer<br/>
            <input type='text' name='answer' value={answer} onChange={answerHandler}/>
          </label>
        </div>
        <button disabled={enableBtn ? false : true }>{props.loading ? 'Adding...' : 'Add Question'}</button>
        <p className="error">{props.errorMsg === "error" ? "Something went wrong. Try again." : ""}</p>
        <p className="success">{props.successMsg === "success" ? "Added successfully." : ""}</p>
      </form>
      </SectionMedium>
    </SectionMedium>
  );
};

export default AddQuestionForm;
