import { FC, useEffect, useRef, useState } from 'react';

interface HijaiyahTitleProps {
  HijaiyahNumber: number;
  arabicContent: string;
  latinScript: string;
  audioSrc: string;
}

const HijaiyahTitle: FC<HijaiyahTitleProps> = ({ arabicContent, latinScript, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="bg-[#E9EDED] my-3 rounded-lg shadow-md p-8 justify-center flex hover:first-letter:text-4xl hover:opacity-75 hover:shadow-lg hover:cursor-pointer"
      onClick={() => {
        audioRef.current?.play();
      }}>
      <div className="flex flex-col gap-3">
        <p className='text-4xl'>
          {arabicContent}
        </p>
        <p className='text-center text-xl'>
          {latinScript}
        </p>
      </div>
      <audio
        hidden
        ref={audioRef}
        src={audioSrc}
        controls
        className="w-full"
      />
    </div>
  );
};

export default HijaiyahTitle;
