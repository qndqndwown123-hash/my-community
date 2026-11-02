import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import CharacterAvatar from '../ui/character-avatar.jsx';

/**
 * ProfileHeader 컴포넌트
 *
 * 인스타그램 프로필처럼 아바타 + 이름 + 통계 + 소개를 보여주는 상단 영역
 *
 * Props:
 * @param {string} name - 프로필 이름 [Required]
 * @param {string} handle - 아이디 (@아이디) [Required]
 * @param {string} bio - 한 줄 소개 [Optional, 기본값: '']
 * @param {number} guestbookCount - 방명록 개수 [Optional, 기본값: 0]
 * @param {number} contactCount - 연락처 개수 [Optional, 기본값: 0]
 * @param {number} snsCount - SNS 채널 개수 [Optional, 기본값: 0]
 *
 * Example usage:
 * <ProfileHeader name="my-community" handle="@my_community" guestbookCount={ 12 } />
 */
function ProfileHeader({ name, handle, bio = '', guestbookCount = 0, contactCount = 0, snsCount = 0 }) {
  const stats = [
    { label: '방명록', value: guestbookCount },
    { label: '연락처', value: contactCount },
    { label: 'SNS', value: snsCount },
  ];

  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 3, md: 6 },
        pb: { xs: 3, md: 4 },
        mb: { xs: 3, md: 4 },
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <CharacterAvatar characterId="mallang" size={ 80 } hasRing />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <CharacterAvatar characterId="mallang" size={ 120 } hasRing />
      </Box>

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          component="h1"
          sx={{ fontSize: { xs: '1.25rem', md: '1.6rem' }, fontWeight: 600, lineHeight: 1.3 }}
        >
          { name }
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, color: 'text.secondary', lineHeight: 1.4 }}>
          { handle }
        </Typography>

        <Box sx={{ display: 'flex', gap: { xs: 2, md: 4 }, my: { xs: 1.5, md: 2 } }}>
          { stats.map((stat) => (
            <Box key={ stat.label } sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}>
              <Box component="span" sx={{ fontWeight: 700, mr: 0.5 }}>{ stat.value }</Box>
              <Box component="span" sx={{ color: 'text.secondary' }}>{ stat.label }</Box>
            </Box>
          )) }
        </Box>

        { bio && (
          <Typography sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.5 }}>
            { bio }
          </Typography>
        ) }
      </Box>
    </Box>
  );
}

export default ProfileHeader;
