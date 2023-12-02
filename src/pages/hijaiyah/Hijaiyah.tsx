import React, { FC } from 'react';

interface HijaiyahProps {
  HijaiyahNumber: number;
  arabicContent: string;
  translation: string;
  latinScript: string;
  audioSrc: string;
}

const Hijaiyah: FC<HijaiyahProps> = ({ HijaiyahNumber, arabicContent, translation, latinScript, audioSrc }) => {
  return (
    <div className="mx-auto max-w-3xl p-2">
      <div className="p-4 bg-brandPrimary rounded-xl text-white font-semibold">
        <p>{HijaiyahNumber}</p>
        <p className="text-right font-bold text-4xl">{arabicContent}</p>
        <p className="mt-2">{latinScript}</p>
        <p className="mt-2">{translation}</p>
        {audioSrc && (
          <audio controls className="mt-2">
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Hijaiyah;