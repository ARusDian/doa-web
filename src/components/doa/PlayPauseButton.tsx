import React, { useState } from 'react';

interface PlayPauseButtonProps {
    isPlaying: boolean;
    onTogglePlayPause: () => void;
  }

const PlayPauseButton : React.FC<PlayPauseButtonProps> = ({ isPlaying, onTogglePlayPause }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onTogglePlayPause}
      style={{ cursor: 'pointer' }}
    >
      {isPlaying ? (
        <path d="M16.9167 24.5416V6.45831H21.75V24.5416H16.9167ZM7.25 24.5416V6.45831H12.0833V24.5416H7.25Z" fill="#9747FF" />
      ) : (
        <path d="M32.8125 17.5C32.8134 17.8714 32.7182 18.2367 32.5361 18.5603C32.354 18.884 32.0913 19.155 31.7734 19.3471L12.075 31.3975C11.7429 31.6008 11.3625 31.7119 10.9732 31.7191C10.5838 31.7263 10.1996 31.6294 9.86016 31.4385C9.52398 31.2505 9.24393 30.9764 9.04882 30.6443C8.8537 30.3122 8.75056 29.9342 8.75 29.549V5.45099C8.75056 5.06583 8.8537 4.68777 9.04882 4.35569C9.24393 4.02362 9.52398 3.7495 9.86016 3.56153C10.1996 3.3706 10.5838 3.27374 10.9732 3.28095C11.3625 3.28816 11.7429 3.39918 12.075 3.60255L31.7734 15.6529C32.0913 15.845 32.354 16.116 32.5361 16.4397C32.7182 16.7634 32.8134 17.1286 32.8125 17.5Z" fill="#9747FF" />
      )}
    </svg>
  );
};

export default PlayPauseButton;
