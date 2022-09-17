import React from 'react';
import style from '../sass/components/Home.module.scss';
import me from '../assets/anime.jpeg';

export const Home = () => {
  return (
    <div className='flex text-white -md:flex-col items-center -md:text-md'>
      <div className='flex-[1]'>
        <h1 className=' font-bold text-5xl leading-[1.5]'>
          I’m Alex Rixten <span className='text-orangeColor'>Font – End</span> Developer
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
      </div>
      <div className='flex-[1] items-center '>
        <img className='object-contain	h-full w-full' src={me} alt={me} />
      </div>
    </div>
  );
};
