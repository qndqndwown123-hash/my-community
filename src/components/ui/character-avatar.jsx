import Box from '@mui/material/Box';

import { getCharacter } from '../../utils/characters.js';

const OUTLINE = '#333333';

/**
 * 캐릭터 종류별 귀 모양을 그린다
 * @param {string} ear - 귀 모양
 * @param {string} body - 몸 색상
 */
function renderEars(ear, body) {
  const earProps = { fill: body, stroke: OUTLINE, strokeWidth: 1.5 };

  switch (ear) {
    case 'long':
      return (
        <>
          <ellipse cx="24" cy="14" rx="4.5" ry="11" { ...earProps } />
          <ellipse cx="40" cy="14" rx="4.5" ry="11" { ...earProps } />
        </>
      );
    case 'round':
      return (
        <>
          <circle cx="17" cy="22" r="6.5" { ...earProps } />
          <circle cx="47" cy="22" r="6.5" { ...earProps } />
        </>
      );
    case 'triangle':
      return (
        <>
          <path d="M14 30 L17 12 L29 21 Z" { ...earProps } strokeLinejoin="round" />
          <path d="M50 30 L47 12 L35 21 Z" { ...earProps } strokeLinejoin="round" />
        </>
      );
    case 'tuft':
      return (
        <path
          d="M30 19 Q29 12 33 11 Q31 15 34 19"
          fill="none"
          stroke={ OUTLINE }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      );
    default:
      return (
        <>
          <circle cx="21" cy="22" r="4.5" { ...earProps } />
          <circle cx="43" cy="22" r="4.5" { ...earProps } />
        </>
      );
  }
}

/**
 * CharacterAvatar 컴포넌트
 *
 * 방명록 프로필로 쓰는 동글동글한 오리지널 캐릭터 아바타 (SVG)
 *
 * Props:
 * @param {string} characterId - 캐릭터 id (utils/characters.js) [Required]
 * @param {number} size - 아바타 크기(px) [Optional, 기본값: 40]
 * @param {boolean} hasRing - 인스타그램 스토리처럼 테두리 링 표시 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <CharacterAvatar characterId="bunny" size={ 48 } hasRing />
 */
function CharacterAvatar({ characterId, size = 40, hasRing = false }) {
  const character = getCharacter(characterId);

  return (
    <Box
      sx={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: '50%',
        p: hasRing ? '3px' : 0,
        border: hasRing ? '2px solid #111111' : 'none',
        bgcolor: 'background.paper',
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 64 64"
        role="img"
        aria-label={ `${ character.name } 캐릭터` }
        sx={{ width: '100%', height: '100%', display: 'block', borderRadius: '50%', bgcolor: '#f0f0f0' }}
      >
        { renderEars(character.ear, character.body) }
        <ellipse cx="32" cy="38" rx="20" ry="17" fill={ character.body } stroke={ OUTLINE } strokeWidth="1.5" />
        <circle cx="25" cy="36" r="2.2" fill={ OUTLINE } />
        <circle cx="39" cy="36" r="2.2" fill={ OUTLINE } />
        <ellipse cx="20" cy="42" rx="3.2" ry="2" fill="#f9b8c4" />
        <ellipse cx="44" cy="42" rx="3.2" ry="2" fill="#f9b8c4" />
        <path
          d="M29 41 Q32 44 35 41"
          fill="none"
          stroke={ OUTLINE }
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </Box>
    </Box>
  );
}

export default CharacterAvatar;
