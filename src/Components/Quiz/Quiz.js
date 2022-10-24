import React from 'react';

const Quiz = ({quiz}) => {
    const {logo, name , total , id} = quiz;
    return (
        <div>
            <div className='flex flex-col justify-center items-center border border-amber-900 rounded-xl shadow-2xl p-4 gap-1'>
                <img className='w-72 h-72' src={logo} alt="" />
                <h2>{name}</h2>
                <p>Number of Quizes: {total}</p>
                <button className='border border-amber-900 bg-amber-900 hover:bg-emerald-900 px-8 py-1 rounded-xl text-white'>Start</button>
            </div>
        </div>
    );
};

export default Quiz;