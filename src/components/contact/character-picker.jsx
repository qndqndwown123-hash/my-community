import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

import { CHARACTERS } from '../../utils/characters.js';
import CharacterAvatar from '../ui/character-avatar.jsx';

/**
 * CharacterPicker 컴포넌트
 *
 * 방명록 프로필로 사용할 캐릭터를 고르는 선택기
 *
 * Props:
 * @param {string} selectedId - 선택된 캐릭터 id [Required]
 * @param {function} onSelect - 캐릭터 선택 시 실행 (id 전달) [Required]
 *
 * Example usage:
 * <CharacterPicker selectedId={ avatar } onSelect={ setAvatar } />
 */
function CharacterPicker({ selectedId, onSelect }) {
  return (
    <Box role="radiogroup" aria-label="프로필 캐릭터 선택" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
      { CHARACTERS.map((character) => {
        const isSelected = character.id === selectedId;
        return (
          <ButtonBase
            key={ character.id }
            role="radio"
            aria-checked={ isSelected }
            onClick={ () => onSelect(character.id) }
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0.5,
              p: 0.5,
              borderRadius: 2,
              opacity: isSelected ? 1 : 0.55,
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 1 },
            }}
          >
            <CharacterAvatar characterId={ character.id } size={ 44 } hasRing={ isSelected } />
            <Box sx={{ fontSize: '0.7rem', fontWeight: isSelected ? 700 : 400 }}>{ character.name }</Box>
          </ButtonBase>
        );
      }) }
    </Box>
  );
}

export default CharacterPicker;
