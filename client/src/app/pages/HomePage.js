import { BaseLayout } from '../layouts';
import {ShowPopularMovies} from '../components/project/'

const HomePage = () => {
  return (
    <BaseLayout>
      <ShowPopularMovies />
    </BaseLayout>
  );
};

export default HomePage;