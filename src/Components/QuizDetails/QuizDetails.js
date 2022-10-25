import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const QuizDetails = () => {
    const quizDetails = useLoaderData().data.questions;
    return (
        <div>
             {
                quizDetails.map(singleQuiz=><SingleQuiz
                key = {singleQuiz.id}
                singleQuiz= {singleQuiz}
                ></SingleQuiz>)
             }
        </div>
    );
};

export default QuizDetails;