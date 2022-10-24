import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    return (
        <div className='block'>
            <div className='flex flex-col gap-8'>
                <img className='w-full h-96' src="https://quiz-questions.uk/wp-content/uploads/2021/02/quiz-questions.png" alt="" />
                <p className='text-5xl font-black'>Explore your Knowledge</p>
            </div>
            <div className='block md:grid grid-cols-2 lg:grid-cols-3 gap-4 mx-8 my-16 py-4 '>
            {
                quizes.map(quiz => <Quiz 
                    key ={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Quizes;