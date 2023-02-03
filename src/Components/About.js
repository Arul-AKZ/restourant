import React from 'react';
import "./style.css";
import Aos from 'aos';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    Aos.init()
  })

  return (
    <section id='about' className='flex p-32 max-lg:flex-col max-lg:px-4'>
      {/* col untuk text */}
        <div className="w-1/2 flex flex-col items-center max-lg:w-full" data-aos="fade-right">
          <h2 className="title -mb-8 max-lg:text-6xl max-lg:text-center">Discover</h2>
          <h4 className="sub-title z-10 max-lg:text-5xl max-lg:mt-1 max-lg:text-center">our store</h4>
          <span className='text-lg mt-12 mb-4 text-gray-400'>* * *</span>

          <p className='text-center text-gray-400 text-sm leading-relaxed max-lg:px-4' data-aos="fade-left">
          <strong>
          Berawal dari bisnis iseng iseng, yang membuat ulang makanan dari mancan negara, dan bisa punya website seperti sekarang 
          </strong> </p>
        
        <div className="btn-about py-4 text-sm mt-5">
          <a href="#" className='uppercase border-b-2 border-black transition duration-200 hover:border-indigo-500'>Tentang Kami</a>
        </div>

        </div>

        {/* col untuk img */}
        <div className="w-1/2 flex justify-center max-lg:w-full" data-aos="fade-up">
            <img 
            src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" 
            alt="Gambar Orang"
            className='w-5/6 object-cover'
            />
          </div>
    </section>
  );
};

export default About