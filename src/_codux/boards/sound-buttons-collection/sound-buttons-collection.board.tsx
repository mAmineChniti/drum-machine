import { createBoard } from '@wixc3/react-board';
import { SoundButtonsCollection } from '../../../components/sound-buttons-collection/sound-buttons-collection';

export default createBoard({
    name: 'SoundButtonsCollection',
    Board: () => <SoundButtonsCollection />,
    isSnippet: true,
});