import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { BarWave } from "react-cssfx-loading";

const Contact = () => {

  <BarWave/>

  return (
    <section id='contact' className='flex p-32 max-lg:px-1 max-lg:flex-col'>
        {/* bagian kiri */}
        <div className="col-1/2 flex flex-col items-center" >
          <h2 className="title -mb-8">Contact</h2>
          <h4 className="sub-title z-10 max-lg:text-center">Let's Chat</h4>

          <p className='text-center text-gray-400 text-sm px-5 leading-relaxed mt-8 max-lg:px-4'>
          Silahkan chat kami jika anda berkenan untuk membeli dan memesan makanan makanan kami, sertakan juga nama anda, alamat email, dan kata kata yang anda berikan, segera akan kami respon
          </p>


        </div>

        {/* bagian kanan */}
        <div className="w-1/2 max-lg:w-full px-10 max-lg:mt-5 max-lg:px-2">
            <form>
                <div className='flex flex-col'>
                    <label className='text-gray-400'>Your Name</label>
                    <input 
                    type="text" 
                    className='rounded-md my-2 border-gray-300 focus:border-none'/>
                </div>
                <div className='flex flex-col '>
                    <label className='text-gray-400'>Your Email</label>
                    <input type="text" className='rounded-md my-2 border-gray-300 focus:border-none'/>
                </div>
                <div className='flex flex-col '>
                    <label className='text-gray-400'>Your Message</label>
                    <textarea cols="30" rows="10" className='rounded-md my-2 border-gray-300 focus:border-none'></textarea>
                </div>
                <div class="mt-2 text-left max-lg:w-full">
                <button className="uppercase py-2 px-5 rounded-full bg-orange-400 text-white text-sm">Send Message 
                <FontAwesomeIcon icon={faEnvelope} className="ml-2"/> 
                </button>
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Contact