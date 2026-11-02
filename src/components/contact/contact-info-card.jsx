import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const ICONS = {
  email: EmailOutlinedIcon,
  phone: PhoneOutlinedIcon,
  location: LocationOnOutlinedIcon,
};

/**
 * ContactInfoCard 컴포넌트
 *
 * 이메일 / 연락처 / 위치를 카드 안에 깔끔하게 정리해서 보여준다
 *
 * Props:
 * @param {Array<{ type: string, label: string, value: string, href: string }>} contacts - 연락처 목록 [Required]
 *
 * Example usage:
 * <ContactInfoCard contacts={ CONTACTS } />
 */
function ContactInfoCard({ contacts }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 600, mb: 2 }}>
          Contact
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          { contacts.map((contact) => {
            const Icon = ICONS[contact.type] ?? EmailOutlinedIcon;
            return (
              <Box key={ contact.type } sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#f2f2f2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon sx={{ fontSize: 20 }} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ fontSize: '0.75rem', color: 'text.secondary', lineHeight: 1.4 }}>
                    { contact.label }
                  </Box>
                  { contact.href ? (
                    <Link
                      href={ contact.href }
                      underline="hover"
                      color="text.primary"
                      sx={{ fontSize: '0.95rem', fontWeight: 500, wordBreak: 'break-all' }}
                    >
                      { contact.value }
                    </Link>
                  ) : (
                    <Box sx={{ fontSize: '0.95rem', fontWeight: 500 }}>{ contact.value }</Box>
                  ) }
                </Box>
              </Box>
            );
          }) }
        </Box>
      </CardContent>
    </Card>
  );
}

export default ContactInfoCard;
