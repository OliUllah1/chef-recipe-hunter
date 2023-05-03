import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChefInfo = () => {
    const allChefInfo = useLoaderData()
    return (
        <div className=' bg-gray-800 py-10 pl-14 pr-10'>
            <h1 className=' text-center text-4xl text-white font-bold mb-5'>Meet Our <br/> Professional  Chefs</h1>
           
            <div className='grid grid-cols-3 gap-10'>
                {
                    allChefInfo.map(chef=><ChefCard chef={chef} key={chef.id}></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefInfo;