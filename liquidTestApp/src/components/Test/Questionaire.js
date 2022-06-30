
import Questions from "./Questions";
import React, { useState, useEffect } from "react";
const Questionaire = () => {
    const [quesNum, setQuesNum] =  useState(0);
    const [answers, setAnswers] = useState([]);
    const [questions, setQuestions] = useState([]);

    const fetchQues = async (taskText) => {
        try {
        const response = await fetch(
            'https://react-app-38291-default-rtdb.firebaseio.com/questions.json'
        );

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();

        const loadedQuestions = [];

        for (const quesKey in data) {
            loadedQuestions.push({ id: quesKey, question: data[quesKey].data });
        }
        setQuestions(loadedQuestions);
        } catch (err) {
          //setError(err.message || 'Something went wrong!');
        }
    };

    useEffect(() => {
        fetchQues();
    }, []);
    const questionsHandler = (num) => {
        setQuesNum(num);
    }
    const answersHandler = (ans) => {
        setAnswers([ans, ...answers]);
    }
    return(
        <React.Fragment>
            { questions.length > 0 ? <Questions questions={questions} setQuesNum={questionsHandler} quesNum={quesNum} setAns={answersHandler} ans={answers}/> : ""}
        </React.Fragment>
    );
}

export default Questionaire;