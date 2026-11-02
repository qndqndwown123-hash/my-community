import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { DEFAULT_CHARACTER_ID } from '../../utils/characters.js';
import CharacterPicker from './character-picker.jsx';

const NAME_MAX = 20;
const MESSAGE_MAX = 300;

/**
 * GuestbookForm 컴포넌트
 *
 * 캐릭터 프로필 + 이름 + 메시지를 입력해 방명록을 남기는 폼
 *
 * Props:
 * @param {function} onSubmit - 작성 시 실행, { name, message, avatar } 전달 후 성공 여부(boolean) 반환 [Required]
 *
 * Example usage:
 * <GuestbookForm onSubmit={ addEntry } />
 */
function GuestbookForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [avatar, setAvatar] = useState(DEFAULT_CHARACTER_ID);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = name.trim().length > 0 && message.trim().length > 0;

  /** 방명록 제출 */
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid || isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    const isSuccess = await onSubmit({ name: name.trim(), message: message.trim(), avatar });
    if (isSuccess) {
      setMessage('');
    }
    setIsSubmitting(false);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 600, mb: 2 }}>
          방명록 남기기
        </Typography>

        <Box component="form" onSubmit={ handleSubmit } sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Box sx={{ fontSize: '0.8rem', color: 'text.secondary', mb: 1 }}>프로필 캐릭터</Box>
            <CharacterPicker selectedId={ avatar } onSelect={ setAvatar } />
          </Box>

          <TextField
            label="이름"
            size="small"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
            slotProps={ { htmlInput: { maxLength: NAME_MAX } } }
            fullWidth
          />
          <TextField
            label="메시지"
            value={ message }
            onChange={ (event) => setMessage(event.target.value) }
            slotProps={ { htmlInput: { maxLength: MESSAGE_MAX } } }
            helperText={ `${ message.length } / ${ MESSAGE_MAX }` }
            multiline
            minRows={ 3 }
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            disableElevation
            disabled={ !isValid || isSubmitting }
            sx={{ py: 1.2, borderRadius: 2 }}
          >
            { isSubmitting ? '남기는 중...' : '남기기' }
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GuestbookForm;
