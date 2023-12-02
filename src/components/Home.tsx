import { Carousel } from 'flowbite-react';
import React from 'react'
import Banner1 from "../assets/Banner1.png"

function Home() {
  return (
    <div className='bg-white'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='h-4/5' rightControl=" " leftControl=" ">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12 ">
          <div>
            <img src={Banner1} alt="" className='mr-16'/>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Belajar, Kumpulan dan <span className='text-brandPrimary'> Membaca Doa</span></h1>
            <p className='text-neutralGrey text-base mb-8 '>Menyediakan Kumpulan Doa dan Juz amma</p>
            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Baca Sekarang</button>
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12 ">
          <div>
            <img src={Banner1} alt="" className='mr-16'/>
          </div>
          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Belajar, Kumpulan dan <span className='text-brandPrimary'> Membaca Doa</span></h1>
            <p className='text-neutralGrey text-base mb-8 '>Menyediakan Kumpulan Doa dan Juz amma</p>
            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Baca Sekarang</button>
          </div>
        </div>
      </Carousel>
        </div>
    </div>
  );
};

export default Home