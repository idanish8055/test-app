import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import AddQuestionForm from "./AddQuestionForm";
import QuestionListing from "./QuestionListing";

const AdminDashboard = () => {
    const [enableForm, setEnableForm] = useState(true);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const search = window.location.search;
    useEffect(() => {
        if(search.includes("danish") || search.includes("shubham")){
            setEnableForm(true);
        }
    }, [search]);
    
    const addQuestionHandler = async (data) => {
        try {
            const response = await fetch(
              'https://react-app-38291-default-rtdb.firebaseio.com/questions.json',
              {
                method: 'POST',
                body: JSON.stringify({ data }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
      
            if (!response.ok) {
              throw new Error('Request failed!');
            }
      
            const res = await response.json();
            console.log(res);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            
        } catch (err) {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }
    const isError = error ? "error" : "";
    const isSuccess = success ? "success" : "";

    return(
            <React.Fragment>
                {enableForm ? <AddQuestionForm addQuestion={addQuestionHandler} errorMsg={isError} successMsg={isSuccess} /> : ""}
                <QuestionListing />
            </React.Fragment>
        );
}

export default AdminDashboard;