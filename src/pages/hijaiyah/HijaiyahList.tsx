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
      audioSrc: '/assets/audiohijaiyah/r.mp3'
    },
    {
      number: 11,
      arabicContent: 'ز',
      latinScript: "z",
      audioSrc: '/assets/audiohijaiyah/z.mp3'
    },
    {
      number: 12,
      arabicContent: 'س',
      latinScript: "s",
      audioSrc: '/assets/audiohijaiyah/s.mp3'
    },
    {
      number: 13,
      arabicContent: 'ش',
      latinScript: "sh",
      audioSrc: '/assets/audiohijaiyah/sh.mp3'
    },
    {
      number: 14,
      arabicContent: 'ص',
      latinScript: "S",
      audioSrc: '/assets/audiohijaiyah/S.mp3'
    },
    {
      number: 15,
      arabicContent: 'ض',
      latinScript: "D",
      audioSrc: '/assets/audiohijaiyah/D.mp3'
    },
    {
      number: 16,
      arabicContent: 'ط',
      latinScript: "T",
      audioSrc: '/assets/audiohijaiyah/T.mp3'
    },
    {
      number: 17,
      arabicContent: 'ظ',
      latinScript: "DH",
      audioSrc: '/assets/audiohijaiyah/DH.mp3'
    },
    {
      number: 18,
      arabicContent: 'ع',
      latinScript: "3",
      audioSrc: '/assets/audiohijaiyah/3.mp3'
    },
    {
      number: 19,
      arabicContent: 'غ',
      latinScript: "gh",
      audioSrc: '/assets/audiohijaiyah/gh.mp3'
    },
    {
      number: 20,
      arabicContent: 'ف',
      latinScript: "f",
      audioSrc: '/assets/audiohijaiyah/f.mp3'
    },
    {
      number: 21,
      arabicContent: 'ق',
      latinScript: "q",
      audioSrc: '/assets/audiohijaiyah/q.mp3'
    },
    {
      number: 22,
      arabicContent: 'ك',
      latinScript: "k",
      audioSrc: '/assets/audiohijaiyah/k.mp3'
    },
    {
      number: 23,
      arabicContent: 'ل',
      latinScript: "l",
      audioSrc: '/assets/audiohijaiyah/l.mp3'
    },
    {
      number: 24,
      arabicContent: 'م',
      latinScript: "m",
      audioSrc: '/assets/audiohijaiyah/m.mp3'
    },
    {
      number: 25,
      arabicContent: 'ن',
      latinScript: "n",
      audioSrc: '/assets/audiohijaiyah/n.mp3'
    },
    {
      number: 26,
      arabicContent: 'ه',
      latinScript: "h",
      audioSrc: '/assets/audiohijaiyah/h.mp3'
    },
    {
      number: 27,
      arabicContent: 'و',
      latinScript: "uu/w",
      audioSrc: '/assets/audiohijaiyah/w.mp3'
    },
    {
      number: 28,
      arabicContent: 'ي',
      latinScript: "ii/y",
      audioSrc: '/assets/audiohijaiyah/y.mp3'
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