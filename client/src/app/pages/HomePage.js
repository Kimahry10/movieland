import { BaseLayout } from '../layouts';
import { HomepageMovies, HomepageTrending, HomepageTrailers } from '../components/project/'
import { useAuth } from "../contexts/firebase";
import { Helmet } from 'react-helmet';

const HomePage = () => {

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