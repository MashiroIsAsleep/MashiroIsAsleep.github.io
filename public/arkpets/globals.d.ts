import { Character } from './character';
import { showContextMenu } from './menu';
import type { CharacterModel } from './types';
export { Character, showContextMenu, CharacterModel, };
declare const arkpets: {
    Character: typeof Character;
    showContextMenu: typeof showContextMenu;
};
export default arkpets;
