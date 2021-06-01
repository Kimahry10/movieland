import { BaseLayout } from '../layouts';
import { HomepageMovies, HomepageTrending, HomepageTrailers} from '../components/project/'
const HomePage = () => {
  return (
    <BaseLayout>
      <HomepageMovies />
      <HomepageTrending />
      <HomepageTrailers />
    </BaseLayout>
  );
};

export default HomePage;