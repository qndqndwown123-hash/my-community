/**
 * 날짜를 인스타그램 스타일의 상대 시간으로 변환한다
 * @param {string} dateString - ISO 날짜 문자열
 * @returns {string} 예: '방금 전', '5분 전', '3일 전', '2026. 11. 3.'
 */
export function formatRelativeDate(dateString) {
  const diffSeconds = Math.floor((Date.now() - new Date(dateString).getTime()) / 1000);

  if (diffSeconds < 60) {
    return '방금 전';
  }
  if (diffSeconds < 3600) {
    return `${ Math.floor(diffSeconds / 60) }분 전`;
  }
  if (diffSeconds < 86400) {
    return `${ Math.floor(diffSeconds / 3600) }시간 전`;
  }
  if (diffSeconds < 604800) {
    return `${ Math.floor(diffSeconds / 86400) }일 전`;
  }
  return new Date(dateString).toLocaleDateString('ko-KR');
}
