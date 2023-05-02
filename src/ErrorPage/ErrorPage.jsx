import React from 'react';
import errorLogo from '../../public/images/404.jpg';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex justify-center text-center bg-white mt-10'>
            <div>
            <img className=' h-96' src={errorLogo} alt="" />
            <h4 className=' text-red-600 text-2xl font-semibold'>PAGE NOT FOUND</h4>
            <Link to="/"><button className=' bg-blue-500 px-4 py-2 rounded mt-3 font-semibold text-white'>Back To Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;