import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkIcon from '@mui/icons-material/Link';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ICONS = {
  instagram: InstagramIcon,
  github: GitHubIcon,
  youtube: YouTubeIcon,
  x: XIcon,
};

/**
 * SnsLinksCard 컴포넌트
 *
 * SNS 링크를 동그란 아이콘 버튼으로 나란히 보여준다
 *
 * Props:
 * @param {Array<{ type: string, label: string, href: string }>} links - SNS 링크 목록 [Required]
 *
 * Example usage:
 * <SnsLinksCard links={ SNS_LINKS } />
 */
function SnsLinksCard({ links }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
        <Typography component="h2" sx={{ fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 600, mb: 1 }}>
          Social
        </Typography>
        <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.5, mb: 3 }}>
          SNS 에서도 소식을 나누고 있어요.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          { links.map((link) => {
            const Icon = ICONS[link.type] ?? LinkIcon;
            return (
              <Tooltip key={ link.type } title={ link.label }>
                <IconButton
                  component="a"
                  href={ link.href }
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={ link.label }
                  sx={{
                    width: 52,
                    height: 52,
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.primary',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      borderColor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              </Tooltip>
            );
          }) }
        </Box>
      </CardContent>
    </Card>
  );
}

export default SnsLinksCard;
