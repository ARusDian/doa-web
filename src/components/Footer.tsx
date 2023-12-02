import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-brandPrimary text-white py-8">
      <div className="container mx-auto text-center mb-[-2rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-lg font-semibold">Hubungi Kami:</p>
            <div className="mt-2">
              <p>Institut Teknologi Kalimantan</p>
              <p>Jalan Soekarno-Hatta Km.15, Karang Joang, Kec. Balikpapan Utara , Balikpapan, Kalimantan Timur , Indonesia</p>
              <p>Telepon: +62 (0542) 8530801</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-semibold">Akses Cepat:</p>
            <div className="mt-2">
              <p><a href="/">Home</a></p>
              <p><a href="/">About</a></p>
              <p><a href="/">Al-Qur'an</a></p>
              <p><a href="/">Doa</a></p>
            </div>
          </div>

          <div>
          <p className="text-lg font-semibold">Tim Kami:</p>
            <div className="mt-2">
            <p>Ahmad Rusdianto Andarina S : <a href="mailto:11211005@student.itk.ac.id">11211005@student.itk.ac.id</a></p>
            <p>Luthfy Ahmad Ramadhani : <a href="mailto:11211047@student.itk.ac.id">11211047@student.itk.ac.id</a></p>
            <p>M. Aqsal Ilham Syafatullah : <a href="mailto:11211048@student.itk.ac.id">11211048@student.itk.ac.id</a></p>
            <p>Muhammad Erlangga Putra H : <a href="mailto:11211057@student.itk.ac.id">11211057@student.itk.ac.id</a></p>
          </div>
          </div>
        </div>

        <div className="flex bg-gray-800 items-center justify-center space-x-8 mt-9 p-5">
        <p className="">© {new Date().getFullYear()} Website DOA</p>
          <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <FaGithub className="h-6 w-6" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
