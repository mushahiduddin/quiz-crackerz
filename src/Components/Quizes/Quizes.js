import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
    return (
        <div className='block md:grid grid-cols-2 lg:grid-cols-3 gap-4 m-8 '>
            {
                quizes.map(quiz => <Quiz 
                    key ={quiz.id}
                    quiz={quiz}
                    ></Quiz>)
            }
        </div>
    );
};

export default Quizes;