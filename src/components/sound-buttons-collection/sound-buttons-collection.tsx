import React, { useEffect, useState } from 'react';
import { SoundButton } from '../sound-button/sound-button';
import audioFiles from '**.mp3';
interface SoundButtonsCollectionProps {}

export function getFileName(path: string): string {
  const filenameWithExtension = path.split('/').pop() || '';
  const filenameWithoutExtension = filenameWithExtension.split('.')[0];
  return filenameWithoutExtension.replace(/[_-]/g, ' ');
}

export const SoundButtonsCollection: React.FC<
  SoundButtonsCollectionProps
> = ({}) => {
  const [audioPaths, setAudioPaths] = useState<string[]>([]);

  useEffect(() => {
    const fetchAudioPaths = async () => {
      const paths = Object.keys(audioFiles).map((fileName) => fileName);
      setAudioPaths(paths);
    };

    fetchAudioPaths().catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-blue-200 rounded-lg ml-5">
      {audioPaths.map((path, index) => (
        <SoundButton
          key={index}
          audioPath={path}
          audioName={getFileName(path)}
        />
      ))}
    </div>
  );
};
