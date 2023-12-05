import { Carousel } from "flowbite-react";
import AppLayout from "../layouts/AppLayout";
import Banner1 from "/assets/Banner1.png"

export default function Home() {
    const services = [
        {
            id: 1, title: 'Hijaiyah',
            desription: 'Huruf hijaiyah merupakan huruf abjad dalam bahasa Arab yang berjumlah 30 huruf. Huruf hijaiyah berasal dari bahasa Arab, yakni kata harf dan hajja',
            route : '/hijaiyah',
            image: '/assets/card1.jpg'
        },
        {
            id: 2, title: 'Juz-Amma',
            desription: 'Juz Amma adalah sebutan untuk bagian terakhir dari Al-Quran, yang terdiri dari Juz 30. Juz ini terkenal karena berisi surat-surat pendek yang sering digunakan dalam ibadah sehari-hari.',
            route: '/juz-amma',
            image: '/assets/card2.png'
        },
        {
            id: 3, title: 'Kumpulan Doa',
            desription: 'Berisikan Sekumpulan Doa-doa didalam Al- Quran, yang berguna untuk kehidupan sehari-hari umat islam',
            route: '/doa',
            image: '/assets/card3.png'
        },
    ]
    return (
        <AppLayout>
            <div className='bg-white'>
                <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                    <Carousel className='h-4/5' rightControl=" " leftControl=" ">
                        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12 ">
                            <div>
                                <img src={Banner1} alt="" className='mr-16' />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Belajar, Kumpulan dan <span className='text-brandPrimary'> Membaca Doa</span></h1>
                                <p className='text-neutralGrey text-base mb-8 '>Menyediakan Kumpulan Doa dan Juz amma</p>
                                <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Baca Sekarang</button>
                            </div>
                        </div>
                        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse h-full items-center justify-between gap-12 ">
                            <div>
                                <img src={Banner1} alt="" className='mr-16' />
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Belajar, Kumpulan dan <span className='text-brandPrimary'> Membaca Doa</span></h1>
                                <p className='text-neutralGrey text-base mb-8 '>Menyediakan Kumpulan Doa dan Juz amma</p>
                                <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 '>Baca Sekarang</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className='md:px-14 px-4 py-8 max-w-screen-2xl mx-auto'>
                    <div className='text-center my-8'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Selamat datang di DOA</h2>
                        <p className='text-neutralDGrey'>Kami menyediakan berbagai macam doa-doa
                        </p>
                    </div>
                    {/* service card */}
                    <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 mb-8'>
                        {
                            services.map(services => <div
                                onClick={() => {
                                    window.location.href = services.route
                                }}
                                key={services.id}
                                className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 
                        hover:border-indigo-700 transition-all duration-300 flex item-center justify-center h-full '>
                                <div>
                                    <div className='bg-[#F5EFFB] mb-4 '><img src={services.image} alt="" className='' /></div>
                                    <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{services.title}</h4>
                                    <p className='text-sm text-neutralDGrey  '>{services.desription}</p>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}
