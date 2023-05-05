import { handler } from 'daisyui';
import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';
import LazyLoad from 'react-lazy-load';

const Recipes = ({recipe}) => {
    const [readMore ,setReadMore]=useState(false);
    const [bookMark,setBookMark] = useState(false)
    const {cookingMethod,ingredients,recipeName,rating,recipeImg}=recipe;
    
    const handleBookMark=()=>{
        setBookMark(true)
        return toast('Wow ! Your Favorite Recipe added')
    }


    return (
        <div>
            <div className="card mb-10 lg:mb-0 px-2 lg:px-0 lg:w-96 bg-base-100 shadow-xl">
              <figure className="lg:px-5 pt-50 lg:h-52">
               <LazyLoad>
               <img
                  src={recipeImg}
                  alt="Shoes"
                  className="rounded-xl h-full w-full"
                />
               </LazyLoad>
              </figure>
              <div className=" pb-5 px-2 lg:px-5">
                <h3 className='font-semibold text-xl mt-3'><span className=' font-bold'>Recipe Name : </span> {recipeName}</h3>
                <h4 className=' font-bold mt-2'>Ingredients :</h4>
                <ul className='list-decimal pl-5 font-semibold'>
                    {ingredients.map((ingredient,index)=><li key={index}>{ingredient}</li>)}
                </ul>
                <div className='mt-3'>
                <p><span className='font-bold mt-2'>Cooking Process :</span> {readMore ?cookingMethod : cookingMethod.slice(0,70)}...</p>
                {readMore?<a className="link link-secondary" onClick={()=>setReadMore(!true)}>Less More</a>:<a onClick={()=>setReadMore(!false)} className='link link-accent'>Read More</a>}
                </div>
                <div className='flex items-center justify-between  mt-3'>
                <p className=' font-semibold text-yellow-400 text-xl'><span className=' font-bold text-gray-800'>Rating :</span> {rating}</p>
                <p className='flex items-center gap-2 font-semibold'> Favorite <button disabled={bookMark?true:false} onClick={()=>handleBookMark()} ><FaRegBookmark className={bookMark?"text-yellow-500":''}></FaRegBookmark></button></p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Recipes;