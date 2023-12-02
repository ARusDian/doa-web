import React from 'react';
import Hijaiyah from './Hijaiyah';
import AppLayout from '../../layouts/AppLayout';

const HijaiyahList = () => {
  const doas = [
    {
      number: 1,
      title: 'Alif',
      arabicContent: 'ا',
      latinScript: "aa",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 2,
      title: 'Ba',
      arabicContent: 'ب',
      latinScript: "ba",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    },
    {
      number: 3,
      title: 'Ta',
      arabicContent: 'ت',
      latinScript: "ta",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'
    }
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