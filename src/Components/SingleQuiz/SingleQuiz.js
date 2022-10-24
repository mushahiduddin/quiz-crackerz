import React from 'react';

const SingleQuiz = ({singleQuiz}) => {
    const {question,options} = singleQuiz;
    let i = 0;
    return (
        <div className='border border-amber-900 rounded-xl shadow-2xl p-4 m-4 w-3/4 mx-auto  text-left'>
            <h3 className='text-xl font-bold'>Question : {question}</h3>
            <div className='grid grid-cols-2 gap-4 my-4'>
                <p>1. {options[0]}</p>
                <p>2. {options[1]}</p>
                <p>3. {options[2]}</p>
                <p>4. {options[3]}</p>
            </div>
        </div>
    );
};

export default SingleQuiz;