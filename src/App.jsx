import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactPage from './pages/contact-page.jsx';

/**
 * App 컴포넌트 - 전체 페이지 중앙 정렬 레이아웃
 */
function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      py: { xs: 2, md: 4 },
    }}>
      <Container maxWidth="md" sx={{ py: 4, px: { xs: 2, md: 3 } }}>
        <ContactPage />
      </Container>
    </Box>
  );
}

export default App;
