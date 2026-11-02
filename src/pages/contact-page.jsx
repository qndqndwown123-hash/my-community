import Grid from '@mui/material/Grid';

import ContactInfoCard from '../components/contact/contact-info-card.jsx';
import GuestbookForm from '../components/contact/guestbook-form.jsx';
import GuestbookList from '../components/contact/guestbook-list.jsx';
import ProfileHeader from '../components/contact/profile-header.jsx';
import SnsLinksCard from '../components/contact/sns-links-card.jsx';
import useGuestbook from '../hooks/use-guestbook.js';
import { CONTACTS, PROFILE, SNS_LINKS } from '../utils/contact-data.js';

/**
 * ContactPage 컴포넌트
 *
 * 프로필 헤더 + (연락처 | SNS) + (방명록 작성 | 방명록 목록) 을 좌우 2개씩 배치한 페이지
 *
 * Example usage:
 * <ContactPage />
 */
function ContactPage() {
  const { entries, isLoading, errorMessage, isPreviewMode, addEntry } = useGuestbook();

  return (
    <>
      <ProfileHeader
        name={ PROFILE.name }
        handle={ PROFILE.handle }
        bio={ PROFILE.bio }
        guestbookCount={ entries.length }
        contactCount={ CONTACTS.length }
        snsCount={ SNS_LINKS.length }
      />

      <Grid container spacing={ { xs: 2, md: 3 } }>
        <Grid size={ { xs: 12, md: 6 } }>
          <ContactInfoCard contacts={ CONTACTS } />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <SnsLinksCard links={ SNS_LINKS } />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <GuestbookForm onSubmit={ addEntry } />
        </Grid>
        <Grid size={ { xs: 12, md: 6 } }>
          <GuestbookList
            entries={ entries }
            isLoading={ isLoading }
            errorMessage={ errorMessage }
            isPreviewMode={ isPreviewMode }
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ContactPage;
