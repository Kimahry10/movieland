import { BaseLayout } from '../layouts';
import {HomepageMovies, ShowpopularTvShows} from '../components/project/'

const HomePage = () => {
  return (
    <BaseLayout>
      <HomepageMovies />
      <ShowpopularTvShows />
    </BaseLayout>
  );
};

export default HomePage;