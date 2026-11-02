/**
 * 방명록 프로필로 선택할 수 있는 오리지널 캐릭터 목록
 * - ear: 귀 모양 (small, round, long, triangle, tuft)
 */
export const CHARACTERS = [
  { id: 'mallang', name: '말랑이', body: '#ffffff', ear: 'small' },
  { id: 'bunny', name: '토토', body: '#fdf6f0', ear: 'long' },
  { id: 'bear', name: '곰돌', body: '#d9b99b', ear: 'round' },
  { id: 'cat', name: '냥냥', body: '#d4d4d4', ear: 'triangle' },
  { id: 'chick', name: '삐약', body: '#fde68a', ear: 'tuft' },
];

/** 기본 캐릭터 id */
export const DEFAULT_CHARACTER_ID = CHARACTERS[0].id;

/**
 * id 로 캐릭터 정보를 찾는다 (없으면 기본 캐릭터)
 * @param {string} id - 캐릭터 id
 * @returns {object} 캐릭터 정보
 */
export function getCharacter(id) {
  return CHARACTERS.find((character) => character.id === id) ?? CHARACTERS[0];
}
