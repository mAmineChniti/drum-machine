import { createBoard } from '@wixc3/react-board';
import { SoundBoard } from '../../../components/sound-board/sound-board';

export default createBoard({
    name: 'SoundBoard',
    Board: () => <SoundBoard />,
    isSnippet: true,
});