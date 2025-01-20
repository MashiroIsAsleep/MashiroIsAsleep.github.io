import { Character } from './character';
import { CharacterModel } from './types';
import '../styles.css';
interface MenuCallbacks {
    getCharacterModels?: () => CharacterModel[];
    onSelectCharacter?: (c: Character, model: CharacterModel) => void;
    onHideCharacter?: (c: Character) => void;
}
export declare function showContextMenu(e: MouseEvent | TouchEvent, c: Character, callbacks: MenuCallbacks): void;
export {};
