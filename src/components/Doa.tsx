import React, { FC, useState } from 'react';
import DoaNumberIcon from './DoaNumberIcon';

interface DoaTitleProps {
  doaNumber: number;
  doaTitle: string;
  arabicContent: string;
  translation: string;
  latinScript: string;
  audioSrc: string;
}

const DoaTitle: FC<DoaTitleProps> = ({ doaNumber, doaTitle, arabicContent, translation, latinScript, audioSrc }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="mx-auto max-w-3xl p-2">
      <div
        className="p-4 bg-brandPrimary rounded-xl text-white font-semibold cursor-pointer flex items-center"
        onClick={() => setShowContent(!showContent)}
      >
        <DoaNumberIcon doaNumber={doaNumber} />
        <div className="ml-2">
          <p>{doaTitle}</p>
        </div>
      </div>
      {showContent && (
        <div className="p-2 mt-2 bg-gray-200 rounded-xl">
          <p className="text-right font-bold text-4xl">{arabicContent}</p>
          <p className="mt-5">{latinScript}</p>
          <p className="mt-2">{translation}</p>
          {audioSrc && (
            <audio controls className="mt-2">
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
    </div>
  );
};

export default DoaTitle;
