import QuestionsList from "./QuestionsList";
import React, { useState, useEffect } from "react";

const QuestionListing = () => {
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
    
    return(
        <React.Fragment>
        {questions.length > 0 ? <QuestionsList questions={questions}/> : ""}
        </React.Fragment>
    );
}
export default QuestionListing;