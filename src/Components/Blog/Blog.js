import React from 'react';

const Blog = () => {
    return (
        <div className='w-full'>
            <div className='border border-amber-900 rounded-xl shadow-2xl p-4 m-8 text-left'>
                <h2 className='font-bold text-xl mb-1'>
                    What is the purpose of react router?</h2>
                <p>The method of routing involves sending users to various websites in response to their requests or actions. The major application for ReactJS Router is the creation of single page web applications. Multiple routes are defined in the application using React Router. A user will be sent to a specific route when they enter a particular URL into their browser and that URL path matches any of the "routes" in the router file. <br /> <br />
                    The React Router Package, a standard library system built on top of React, is used to implement routing in React applications. It gives the information that will be displayed on the web page to the synchronous URL in the browser. It is mostly used for creating one page web apps and preserves the application's regular structure and functionality.
                </p>
            </div>
            <div className='border border-amber-900 rounded-xl shadow-2xl p-4 m-8 text-left'>
                <h2 className='font-bold text-xl mb-1'>
                    How does Context Api works? </h2>
                <p>The fact that there are so many various methods to approach particular issues is one of the best things about React. We have a couple different form libraries, a ton of CSS libraries, and a ton of different libraries designed specifically to address state data issues in React, which is the most crucial component of React.We get the ability to know when to employ a specific library in our project through practice. We may occasionally end ourselves installing and using libraries that we don't need, especially with React when there are so many libraries to pick from. <br /> <br />
                    Context API is a React API that can address many of the issues that contemporary apps have with state management and the way that state is passed to their components. Context API is a simple alternative to adding a state management library in your project, which would ultimately slow down project performance and increase bundle size.
                </p>
            </div>
            <div className='border border-amber-900 rounded-xl shadow-2xl p-4 m-8 text-left'>
                <h1 className='font-bold text-xl mb-1'>Describe useref() hook in react? </h1>
                <p>The hook useRef() in React returns an object that has a property current that we can pierce as we do with objects. This property is initialized to the passed argument in the function useRef(). The returned object will persist for the full continuance of the element.The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.One of the most common use cases of the hook useRef in React is to reference a DOM element. Since every DOM element has a property ref , we can use the hook useRef for setting a ref to that element. <br /> <br />
                The hook useRef is one of the important and useful React hooks that you need to know. It allows you to access DOM elements directly, and persist data between renders without causing a component to re-render infinitely when changes. </p>
            </div>
        </div>
    );
};

export default Blog;