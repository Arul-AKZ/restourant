import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { BarWave } from "react-cssfx-loading";
import ReactStars from 'react-rating-stars-component';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

  <BarWave/>

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzaRAxt42PZWasEOa3rp6pkqhzuwNvxSjq92nuLbdrHDB8wgicCtij_VKH7_BFPsFMQ/exec'
  const form = document.forms['restourant']

  const kirimData = async(e) => {
    e.preventDefault()
    await fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  }

  useEffect(() => {
    kirimData()
  })

  return (
    <section id='contact' className='flex p-32 max-lg:px-1 max-lg:flex-col'>
        {/* bagian kiri */}
        <div className="col-1/2 flex flex-col items-center" >
          <h2 className="title -mb-8">Contact</h2>
          <h4 className="sub-title z-10 max-lg:text-center">Let's Chat</h4>
          
          <br />
          <p>Beri nilai <FontAwesomeIcon icon={faThumbsUp}/></p>
          <div>
          <ReactStars count={5}
          size={24}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"/>
          </div>
          

          <p className='text-center text-gray-400 text-sm px-5 leading-relaxed mt-8 max-lg:px-4'>
            <strong>Silahkan chat kami jika anda berkenan untuk membeli dan memesan makanan makanan kami, sertakan juga nama anda, alamat email, dan kata kata yang anda berikan, segera akan kami respon</strong>
          </p>


        </div>

        {/* bagian kanan */}
        <div className="w-1/2 max-lg:w-full px-10 max-lg:mt-5 max-lg:px-2">

            <form name="restourant" onSubmit={kirimData}>
                <div className='flex flex-col'>
                    <label className='text-gray-400' >Nama kamu</label>
                    <input 
                    type="text" 
                    className='rounded-md my-2 border-gray-300 focus:border-none' name="nama" placeholder="Masukan nama" required/>
                </div>
                <div className='flex flex-col '>
                    <label className='text-gray-400'>Email kamu</label>
                    <input type="email" className='rounded-md my-2 border-gray-300 focus:border-none' name="email" placeholder="Masukan email" required/>
                </div>
                <div className='flex flex-col '>
                    <label className='text-gray-400' >Pesan kamu</label>
                    <textarea cols="30" rows="10" type="pesan" className='rounded-md my-2 border-gray-300 focus:border-none' name="pesan" placeholder="Masukan pesan" required/>
                </div>
                <div class="mt-2 text-left max-lg:w-full">
                <button 
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 bg-slate-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  Kirim Pesan 
                <FontAwesomeIcon icon={faEnvelope} className="ml-2"/> 
                <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
                </button>
                </div>
                
            </form>
        </div>
    </section>
  )
}

export default Contact