import React from 'react';
import menuImg from '../../../public/images/menus.jpg'
const MainMenu = () => {
    return (
        <div className=' p-10'>
            <h1 className='text-center text-5xl font-bold mb-10'>Our Menu Lists</h1>
            <div className=" flex gap-5 items-center">
        <div className='lg:w-[45%]'>
          <img src={menuImg} className="rounded-lg shadow-2xl w-full" />
        </div>
        <div className='lg:w-[55%]'>
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Lasagne alla Bolognese</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>45</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Fettuccine al Pomodoro</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>25</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Gnocchi di Patate</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>20</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Melanzane alla Parmigiana</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>15</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Pollo alla Cacciatora</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>55</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          <div className='flex justify-between'>
            <h1 className=' text-3xl font-bold text-purple-500'>Pizza Margherita</h1>
            <p className=' text-2xl text-gray-400'>- - - - - - - - - - - - - - - - - - - - - - - </p>
            <p className=' text-3xl text-yellow-300 font-semibold'><span className='text-4xl'>$</span>45</p>
          </div>
          <p className='text-xl font-semibold text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ipsa?</p>
          <hr />
          
        </div>
      </div>
        </div>
    );
};

export default MainMenu;