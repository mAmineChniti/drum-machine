import React, { useEffect, useState } from 'react';
import { SoundButton } from '../sound-button/sound-button';

interface SoundButtonsCollectionProps { }

export function getFileName(path: string): string {
        const filenameWithExtension = path.split('/').pop() || '';
        const filenameWithoutExtension = filenameWithExtension.split('.')[0];
        return filenameWithoutExtension.replace(/[_-]/g, ' ');
}

export const SoundButtonsCollection: React.FC<SoundButtonsCollectionProps> = ({ }) => {
        const [audioPaths, setAudioPaths] = useState<string[]>([]);

        useEffect(() => {
                const fetchAudioPaths = async () => {
                        const files = import.meta.glob('@assets/*.mp3');
                        const paths = Object.keys(files);
                        setAudioPaths(paths);
                };

                fetchAudioPaths();
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
