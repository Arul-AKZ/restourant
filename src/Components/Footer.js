import { faFacebookSquare, faInstagram, faReddit, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <section 
    id='footer' 
    className='flex flex-col w-screen bg-black max-lg: '>
        <div className='footer flex px-20 py-28'>
        <div className='col-50 flex flex-col'>
          <h2 className='text-white uppercase tracking-widest text-xl font-semibold'>Lokasi</h2>

          <div className='content-explanation flex mt-5'>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:text-center'>Jawa Barat, Cikarang Timur <br /> Jl.Soekarno 89989</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:px-4'>Jawa Tengah, Solo <br /> Jl.Suobardjo 44839</h4>
            </div>
          </div>
        
        </div>
        <div className='col-50 flex flex-col'>
          <h2 className='text-white uppercase tracking-widest text-xl font-semibold max-lg:text-center'>Buka Jam</h2>

          <div className='content-explanation flex mt-5'>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm'>Senin - Kamis <br /> 6:00 Pg - 22:00 Mlm</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm'>Jumat - Minggu <br /> 10:00 Pg - 12:00 Mlm</h4>
            </div>
            <div className='col-50 flex'>
              <h4 className='uppercase text-white text-sm max-lg:text-center'>Tersedia Untuk Catering <br /> Hubungi Kami</h4>
            </div>
          </div>

        </div>
        </div>

        <div className='footer-bottom flex py-8 bg-neutral-800 items-end'>
          <div className='col-50 flex mr-96 max-lg:flex'>
            <p className='mx-12 text-gray-500 text-sm'>© 2017 <a className='link text-neutral-700' href="https://rangerbiru.github.io/rabbaanii-usaha/">Bersama :ProjectResto </a>. Gambar Hasil 
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
          <div className='col-40 flex flex-col items-center mr-10'>
            <a className='link' href="https://www.reddit.com/user/StatisticianIcy2376"><FontAwesomeIcon icon={faReddit} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
          <div className='col-40 flex flex-col items-center'>
            <a className='link' href="https://twitter.com/KahirulAhmad"><FontAwesomeIcon icon={faTwitter} color="gray" size="lg"></FontAwesomeIcon></a>
          </div>
        </div>

    </section>
  )
}

export default Footer