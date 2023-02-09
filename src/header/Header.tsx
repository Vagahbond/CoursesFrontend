import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png'

const Header = () => {
    return (
        <header className="absolute bg-zinc-800 w-full h-fit max-h-16  drop-shadow flex flex-row shadow-xl" >
            <img className='text-6xl text-white font-mono h-full max-h-16' alt='MentoreD' src={Logo} />
            <h1 className="text-6xl text-white align-middle">MentoreD</h1>

            < Link to="courses" className="text-xl text-white ml-auto mr-2 align-middle cursor-pointer hover:bg-zinc-600 rounded-xl my-auto p-2"> Cours</Link >

        </header >
    );
};

export default (Header);