import { FC, useState, useRef } from 'react';
import DoaNumberIcon from './DoaNumberIcon';
import PlayPauseButton from './PlayPauseButton';

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
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleDivClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    setShowContent(!showContent);
    togglePlayPause();
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mx-auto max-w-3xl p-2">
      <div
        className="p-4 bg-brandPrimary rounded-xl text-white font-semibold cursor-pointer flex items-center"
        onClick={handleDivClick}
      >
        <DoaNumberIcon doaNumber={doaNumber} />
        <div className="ml-2">
          <p>{doaTitle}</p>
        </div>
      </div>
      {showContent && (
        <div className="p-2 mt-2 bg-gray-200 rounded-xl">
          <PlayPauseButton isPlaying={isPlaying} onTogglePlayPause={togglePlayPause} />
          <p className="text-right font-bold text-4xl">{arabicContent}</p>
          <p className="mt-5">{latinScript}</p>
          <p className="mt-2">{translation}</p>
          {audioSrc && (
            <div className="mt-2 flex items-center">
              <audio ref={audioRef} onEnded={handleAudioEnded}>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element
              </audio>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DoaTitle;