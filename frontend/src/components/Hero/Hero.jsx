import React from 'react';
import './Hero.css';
import dj from '../../assets/djnight.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
    const partyArray = Array(10).fill("Let's Have Party");

    return (
        <div className='hero'>
            <div className='hero-img'>
                <img src={dj} alt="DJ Night" />
                <div className='hero-content'>
                 
                     <p>Dj Event Slots are Freee Book Right Now</p>
                      <button className='btn' ><Link to='/pricing' > Price Card </Link></button>
                       <button className='btn'><Link to='/pricing' > Details    </Link></button>
                      <button className='btn'> <Link to='/booking' > Book The Evvent </Link> </button>
                      
                </div>
            </div>
            <div className='scroll'>
                {partyArray.map((item, index) => (
                    <div className='scroll-content' key={index}>
                        <h4>{item} &nbsp; &nbsp;</h4>
                    </div>
                ))}
            </div><hr />
        </div>
    );
}

export default Hero;
