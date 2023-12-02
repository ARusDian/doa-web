import React, { Component } from 'react'
import aboutimg from '../assets/About.png'

export class About extends Component {
  render() {
    return (
      <div>
        {/* about text */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src={aboutimg} alt="" />
                </div>
                <div className='md:w-3/5 mx-auto '>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Surah Alfatihah</h2>
                    <p className='text-neutralDgrey'>Al-Fatihah adalah surah pertama dalam al-Qur'an. Surah ini diturunkan di Makkah sehingga tergolong surah makiyah dan terdiri dari tujuh ayat. Al-Fatihah merupakan surah yang pertama-tama diturunkan dengan lengkap di antara surah-surah yang ada dalam Al-Qur'an.</p>
                    <button className='bg-brandPrimary text-white py-4 px-4 transtion-all duratio-300 rounded hover:bg-neutralDGrey mt-8'>Lebih Lanjut</button>
                </div>
            </div>    
        </div>
      </div>
    )
  }
}

export default About