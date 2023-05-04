import React from 'react';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    return (
        <div className='p-10'>
        <h1 className='text-4xl font-bold text-center mb-5'>Blog</h1>
        <div  ref={ref}>
            <h4 className=' font-semibold text-black text-xl'>1 . What is the differences between uncontrolled and controlled components?</h4>
            <p className=' font-semibold text-gray-600 mb-3'><span className='font-bold text-gray-900'>Answer : </span> An uncontrolled component can access data through a reference from the input field of the form, but it cannot store the state of react.Through the controlled component we can access the data through a reference from the input field of the form and store it in the state of react.</p>


            <h4 className=' font-semibold text-black text-xl'>2 . How to validate React props using PropTypes?</h4>
            <p className=' font-semibold text-gray-600 mb-3'><span className='font-bold text-gray-900'>Answer :</span>
            To validate props with propTypes, component propTypes must first be imported. Then the props will be validated by Test.propTypes = propName:propTypes.dataTypes and the props will be validated.</p>


            <h4 className=' font-semibold text-black text-xl'>3 . What is the difference between nodejs and express js.?</h4>
            <p className=' font-semibold text-gray-600 mb-3'><span className='font-bold text-gray-900'>Answer :</span>NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. Its built on Google Chromes V8 engine, which makes it fast and efficient to develop apps. Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application's functionality with middle ware and routing.It adds helpful utilities to Node.js HTTP objects. It facilitates the rendering of dynamic HTTP objects. </p>



            <h4 className=' font-semibold text-black text-xl'>4 . What is a custom hook, and why will you create a custom hook?</h4>
            <p className=' font-semibold text-gray-600 mb-3'><span className='font-bold text-gray-900'>Answer : </span>custom hook is a function. which are made and used for specific tasks. When an application has to perform the same task over and over again. Then we create custom hook and use it. This greatly reduces the number of code in the application and makes it easier to maintain
            </p>
        </div>

        <Pdf targetRef={ref} filename="blog-example.pdf">
        {({ toPdf }) => <div className='text-center mt-5'><button className='border border-blue-400 px-4 py-2 rounded-md font-semibold text-red-400 hover:bg-blue-300' onClick={toPdf}>Download Pdf</button></div>}
        </Pdf>
        </div> 
    );
};

export default Blog;