import { createBoard } from '@wixc3/react-board';
import { SoundButton } from '../../../components/sound-button/sound-button';

export default createBoard({
    name: 'SoundButton',
    Board: () => <SoundButton audioPath={''} audioName={'Cowbell'} />,
    isSnippet: true,
});