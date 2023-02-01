import React from 'react';
import "./style.css";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <section id='home'>
        <div className='bg-home'>

          <div 
          // data-Aos="zoom-in" 
          className='h-screen flex flex-col justify-center items-center'
          >
            <h2 className='title -mb-8  text-yellow-600 max-lg:text-7xl' data-aos="fade-down">
              Welcome
            </h2>
            <h4 
            className='sub-title z-10 text-white max-lg:text-5xl max-lg:mt-1' 
            data-aos-delay='1000'
            data-aos="fade-up"
            >
              Restourant
            </h4>

          <p className='text-white text-lg py-2 max-sm:text-sm max-lg:px-4 max-lg:' >
            Selamat datang di halaman website kami 
            <FontAwesomeIcon icon={faHandsPraying} className="ml-2"/>
          </p>
          </div>
        </div>
    </section>
  );
};

export default Home