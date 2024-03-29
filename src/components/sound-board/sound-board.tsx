import React from 'react';
import { SoundButtonsCollection } from '../sound-buttons-collection/sound-buttons-collection';

export interface SoundBoardProps {}

export const SoundBoard: React.FC<SoundBoardProps> = ({}) => {
  return (
    <div className="h-[300px] w-[500px] rounded-lg bg-orange-300 flex items-center">
      <SoundButtonsCollection />
    </div>
  );
};
