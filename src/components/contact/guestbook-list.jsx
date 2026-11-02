import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { formatRelativeDate } from '../../utils/format-date.js';
import CharacterAvatar from '../ui/character-avatar.jsx';

/**
 * GuestbookList 컴포넌트
 *
 * 인스타그램 댓글처럼 캐릭터 프로필과 함께 방명록 목록을 보여준다
 *
 * Props:
 * @param {Array<{ id: string, name: string, message: string, avatar: string, created_at: string }>} entries - 방명록 목록 [Required]
 * @param {boolean} isLoading - 불러오는 중 여부 [Optional, 기본값: false]
 * @param {string} errorMessage - 오류 메시지 [Optional, 기본값: '']
 * @param {boolean} isPreviewMode - Supabase 미연결 미리보기 모드 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={ entries } isLoading={ isLoading } />
 */
function GuestbookList({ entries, isLoading = false, errorMessage = '', isPreviewMode = false }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 600, mb: 2 }}>
          방명록 { entries.length > 0 && (
            <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>{ entries.length }</Box>
          ) }
        </Typography>

        { isPreviewMode && (
          <Alert severity="info" variant="outlined" sx={{ mb: 2, fontSize: '0.8rem' }}>
            미리보기 모드예요. 데이터베이스가 연결되기 전이라 새로고침하면 방명록이 사라져요.
          </Alert>
        ) }
        { errorMessage && (
          <Alert severity="error" sx={{ mb: 2, fontSize: '0.85rem' }}>{ errorMessage }</Alert>
        ) }

        { isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
            <CircularProgress size={ 28 } color="inherit" />
          </Box>
        ) : entries.length === 0 ? (
          <Box sx={{ textAlign: 'center', color: 'text.secondary', py: 6, fontSize: '0.9rem' }}>
            아직 방명록이 없어요. 첫 번째로 남겨주세요!
          </Box>
        ) : (
          <Box
            component="ul"
            sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 2.5, maxHeight: 420, overflowY: 'auto', pr: 1 }}
          >
            { entries.map((entry) => (
              <Box component="li" key={ entry.id } sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <CharacterAvatar characterId={ entry.avatar } size={ 40 } />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Box sx={{ fontSize: '0.9rem', lineHeight: 1.5, wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                    <Box component="span" sx={{ fontWeight: 700, mr: 1 }}>{ entry.name }</Box>
                    { entry.message }
                  </Box>
                  <Box sx={{ fontSize: '0.75rem', color: 'text.secondary', mt: 0.5 }}>
                    { formatRelativeDate(entry.created_at) }
                  </Box>
                </Box>
              </Box>
            )) }
          </Box>
        ) }
      </CardContent>
    </Card>
  );
}

export default GuestbookList;
