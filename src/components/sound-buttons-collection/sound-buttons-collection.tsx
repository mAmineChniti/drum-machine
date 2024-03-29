import React from 'react';
import { SoundButton } from '../sound-button/sound-button';
// remove import.meta.glob (find another way or import 1/1)
const Sounds: string[] = Object.values(
  import.meta.glob('@assets/*.mp3', { eager: true, query: '?url' })
);

interface SoundButtonsCollectionProps {}

export const SoundButtonsCollection: React.FC<SoundButtonsCollectionProps> = ({}) => {
  return (
    <div className="grid grid-cols-3 gap-3 p-4 bg-blue-200 rounded-lg ml-5">
      {Sounds.map((url, index) => (
        <SoundButton key={index} audioPath={url} audioName="" />
      ))}
    </div>
  );
};
