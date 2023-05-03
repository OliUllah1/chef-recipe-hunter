import { handler } from 'daisyui';
import React, { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';
const Recipes = ({recipe}) => {
    const [readMore ,setReadMore]=useState(false);
    const [bookMark,setBookMark] = useState(false)
    const {cookingMethod,ingredients,recipeName,rating,recipeImg,favorite}=recipe;
    
    const handleBookMark=()=>{
        setBookMark(true)
        return toast('The Recipe is Your Favorite')
    }


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-5 pt-50 h-52">
                <img
                  src={recipeImg}
                  alt="Shoes"
                  className="rounded-xl h-full w-full"
                />
              </figure>
              <div className=" pb-5 px-5">
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
                <p className='flex items-center gap-2 font-semibold'> Favorite <button disabled={bookMark?"true":""} onClick={()=>handleBookMark()} ><FaRegBookmark className={bookMark?"text-yellow-500":''}></FaRegBookmark></button></p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Recipes;