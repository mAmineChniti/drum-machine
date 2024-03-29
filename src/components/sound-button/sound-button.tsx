import React, { useState, useEffect } from 'react';

export interface SoundButtonProps {
  audioPath: string;
  audioName: string;
}

export const SoundButton: React.FC<SoundButtonProps> = ({
  audioPath,
  audioName,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [foundAudio, setFoundAudio] = useState(true);

  useEffect(() => {
    const audio = new Audio(audioPath);
    audio.onerror = () => {
      setFoundAudio(false);
    };
  }, [audioPath]);

  const playAudio = () => {
    const audio = new Audio(audioPath);
    audio.oncanplaythrough = () => {
      audio.play();
    };
  };

  const handleClick = () => {
    if (foundAudio && !isPlaying && !isClicked) {
      playAudio();
      setIsClicked(true);
      setIsPlaying(true);
    }
    setIsPlaying(false);
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <div
      className={`p-2 border rounded-md cursor-pointer text-center flex justify-center items-center w-[70px] h-[35px] ${
        isClicked
          ? 'bg-blue-500 text-white'
          : foundAudio
            ? 'bg-gray-200 text-gray-700'
            : 'bg-red-500 text-white'
      }`}
      onClick={handleClick}
      style={{ userSelect: 'none' }}
    >
      {foundAudio ? audioName : 'X'}
    </div>
  );
};
