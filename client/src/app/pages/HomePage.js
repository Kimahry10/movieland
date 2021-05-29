import { BaseLayout } from '../layouts';
import { HomepageMovies, ShowpopularTvShows, HomepageTrending} from '../components/project/'

const HomePage = () => {
  return (
    <BaseLayout>
      <HomepageMovies />
      <HomepageTrending />
    </BaseLayout>
  );
};

export default HomePage;