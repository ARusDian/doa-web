import React from 'react';
import Hijaiyah from './Hijaiyah';
import AppLayout from '../../layouts/AppLayout';

const HijaiyahList = () => {
  const doas = [
    {
      number: 1,
      title: 'Doa Sebelum Makan',
      arabicContent: 'اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
      translation: 'Artinya: Dengan menyebut nama Allah yang Maha Pemurah lagi Maha Penyayang.',
      latinScript: "Latin: Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannar",
      audioSrc: '/assets/audiodoa/doa_sebelum_makan.mp3'}
    // ... your data here
  ];

  return (
    <AppLayout>
      {doas.map(({ number, arabicContent, translation, latinScript, audioSrc }) => (
        <Hijaiyah
          key={number}
          HijaiyahNumber={number}
          arabicContent={arabicContent}
          latinScript={latinScript}
          translation={translation}
          audioSrc={audioSrc}
        />
      ))}
    </AppLayout>
  );
};

export default HijaiyahList;