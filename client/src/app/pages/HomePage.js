import { BaseLayout } from '../layouts';
import { HomepageMovies, HomepageTrending, HomepageTrailers } from '../components/project/'
import { useAuth } from "../contexts/firebase";
import { Helmet } from 'react-helmet';
// import { v4 as uuidv4 } from 'uuid';
// import { useEffect } from 'react';

const HomePage = () => {
  // const { currentUser } = useAuth();

  return (
    <BaseLayout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movieland | Homepage</title>
        <meta name="Movieland homepage" content="homepage" />
      </Helmet>
      <HomepageMovies />
      <HomepageTrending />
      <HomepageTrailers />
    </BaseLayout>
  );
};

export default HomePage;