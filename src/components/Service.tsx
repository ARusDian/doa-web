import React from 'react'

function Service() {
  const services = [
      {id:1, title: 'Belajar Hijaiyah', desription:'Huruf hijaiyah merupakan huruf penyusun kata dalam Al-Quran. Huruf hijaiyah digunakan untuk menuliskan bahasa arab.', 
    image:'/src/assets/card1.png'},
      {id:2, title: 'Juz-Amma', desription:'Juz Amma adalah sebutan untuk bagian terakhir dari Al-Quran, yang terdiri dari Juz 30. Juz ini terkenal karena berisi surat-surat pendek yang sering digunakan dalam ibadah sehari-hari.', 
      image:'/src/assets/card2.png'},
      {id:3, title: 'Kumpulan Doa', desription:'Berisikan Sekumpulan Doa-doa didalam Al- Quran, yang berguna untuk kehidupan sehari-hari umat islam', 
      image:'/src/assets/card3.png'},
  ]
  return (
    
    <div className='md:px-14 px-4 py-8 max-w-screen-2xl mx-auto'>
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Selamat datang di DOA</h2>
            <p className='text-neutralDGrey'>Kami menyediakan berbagai macam doa-doa
            </p>
        </div>
        {/* service card */}
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
          {
            services.map(services => <div key={services.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 
            hover:border-indigo-700 transition-all duration-300 flex item-center justify-center h-full '>
              <div>
                <div className='bg-[#F5EFFB] mb-4 '><img src={services.image} alt="" className=''/></div>
                <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{services.title}</h4>
                <p className='text-sm text-neutralDGrey  '>{services.desription}</p>
              </div>
            </div>)
          }
        </div>
    </div>
  )
}

export default Service