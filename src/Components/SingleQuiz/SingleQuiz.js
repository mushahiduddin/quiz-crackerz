import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ singleQuiz }) => {
    const { question, options, correctAnswer } = singleQuiz;
    console.log(correctAnswer);
    const notify = (e) => {
        if (e.target.innerText.toLowerCase() === correctAnswer.toLowerCase() ) {
            console.log(correctAnswer);
            console.log(e.target.innerText);
            toast("Wow Genious !! Your answer Is Correct. ");
        }
        else {
            toast("That's Wrong !!");
        }
    };
    return (
        <div className='border border-amber-900 rounded-xl shadow-2xl p-4 m-8 w-11/12 mx-auto text-left'>
            <div className='flex justify-between'><h3 className='text-xl font-bold w-9/12'>Question : {question.slice(3,-4)}</h3>
            <p className=''><i className="fa-solid fa-eye"></i></p>
            </div>
            <div className='grid grid-cols-2 gap-4 my-4'>
                <p className='border border-emerald-900 rounded-xl shadow-xl p-2'>1. <span onClick={notify}>{options[0]}</span></p>
                <p className='border border-emerald-900 rounded-xl shadow-xl p-2'>2. <span onClick={notify}>{options[1]}</span></p>
                <p className='border border-emerald-900 rounded-xl shadow-xl p-2'>3. <span onClick={notify}>{options[2]}</span></p>
                <p className='border border-emerald-900 rounded-xl shadow-xl p-2'>4. <span onClick={notify}>{options[3]}</span></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SingleQuiz;