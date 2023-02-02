import { faFacebookSquare, faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <section 
    id='footer' 
    className='flex flex-col w-screen bg-black max-lg: '>
        <div className='footer flex px-20 py-28'>
        <div className='col-50 flex flex-col'>
          <h2 className='text-white uppercase tracking-widest text-xl font-semibold'>Location</h2>

          <div className='content-explanation flex mt-5'>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:text-center'>Grove street, ohio 7 <br /> California 89986</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:px-4'>mondstadt street, miami 889 <br /> Los Teyfat 10098</h4>
            </div>
          </div>
        
        </div>
        <div className='col-50 flex flex-col'>
          <h2 className='text-white uppercase tracking-widest text-xl font-semibold max-lg:text-center'>Open Hours</h2>

          <div className='content-explanation flex mt-5'>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm'>Monday - Thursday <br /> 5:30pm - 10:00pm</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm'>Friday - Sunday <br /> 5:30pm - 10:00pm</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:text-center'>Available for Catering <br /> Email Us</h4>
            </div>
          </div>

        </div>
        </div>

        <div className='footer-bottom flex py-8 bg-neutral-800 items-end '>
          <div className='col-50 flex mr-96 max-lg:flex'>
            <p className='mx-12 text-gray-500 text-sm'>© 2017 <a className='link text-neutral-700' href="https://rangerbiru.github.io/rabbaanii-usaha/">Together:ProjectResto </a>. Images by 
            <a className='link text-neutral-700' href="https://graphicburger.com/"> Google</a> & <a className='link text-neutral-700' href="https://unsplash.com/">Unsplash</a></p>
          </div>
          <div className='col-40 flex flex-col items-center mr-10'>
            <a className='link' href="https://www.tiktok.com/@tamogo_"><FontAwesomeIcon icon={faTiktok} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
          <div className='col-40 flex flex-col items-center mr-10'>
            <a className='link' href="https://www.facebook.com/ahmad.khairul.56829446/"><FontAwesomeIcon icon={faFacebookSquare} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
          <div className='col-40 flex flex-col items-center mr-10'>
            <a className='link' href="https://www.instagram.com/ahmad_khairul_zahid/"><FontAwesomeIcon icon={faInstagram} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
          <div className='col-40 flex flex-col items-center'>
            <a className='link' href="https://twitter.com/KahirulAhmad"><FontAwesomeIcon icon={faTwitter} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
        </div>

    </section>
  )
}

export default Footer