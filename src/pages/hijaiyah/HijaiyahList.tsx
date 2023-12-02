import React from 'react';
import Hijaiyah from './Hijaiyah';
import AppLayout from '../../layouts/AppLayout';

const HijaiyahList = () => {
  const doas = [
    {
      number: 1,
      arabicContent: 'ا',
      latinScript: "aa",
      audioSrc: '/assets/audiohijaiyah/aa.mp3'
    },
    {
      number: 2,
      arabicContent: 'ب',
      latinScript: "ba",
      audioSrc: '/assets/audiohijaiyah/ba.mp3'
    },
    {
      number: 3,
      arabicContent: 'ت',
      latinScript: "ta",
      audioSrc: '/assets/audiohijaiyah/ta.mp3'
    },
    {
      number: 4,
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiohijaiyah/tsa.mp3'
    },
    {
      number: 5,
      arabicContent: 'ج',
      latinScript: "j",
      audioSrc: '/assets/audiohijaiyah/j.mp3'
    },
    {
      number: 6,
      arabicContent: 'ح',
      latinScript: "h",
      audioSrc: '/assets/audiohijaiyah/h.mp3'
    },
    {
      number: 7,
      arabicContent: 'خ',
      latinScript: "kh",
      audioSrc: '/assets/audiohijaiyah/kh.mp3'
    },
    {
      number: 8,
      arabicContent: 'د',
      latinScript: "d",
      audioSrc: '/assets/audiohijaiyah/d.mp3'
    },
    {
      number: 9,
      arabicContent: 'ذ',
      latinScript: "dh",
      audioSrc: '/assets/audiohijaiyah/dh.mp3'
    },
    {
      number: 10,
      arabicContent: 'ر',
      latinScript: "r",
      audioSrc: '/assets/audiodoa/r.mp3'
    },
    {
      number: 11,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 12,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 13,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 14,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 15,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 16,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 17,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 18,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 19,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 20,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 21,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 22,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 23,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 24,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 25,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 26,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 27,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },{
      number: 28,
      title: 'Tsa',
      arabicContent: 'ث',
      latinScript: "tsa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },

  ];

  return (
    <AppLayout>
      {doas.map(({ number, arabicContent, latinScript, audioSrc }) => (
        <Hijaiyah
          key={number}
          HijaiyahNumber={number}
          arabicContent={arabicContent}
          latinScript={latinScript}
          audioSrc={audioSrc}
        />
      ))}
    </AppLayout>
  );
};

export default HijaiyahList;