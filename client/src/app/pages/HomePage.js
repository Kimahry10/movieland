import { BaseLayout } from '../layouts';
import { HomepageMovies, HomepageTrending, HomepageTrailers } from '../components/project/'
import { useAuth } from "../contexts/firebase";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const HomePage = () => {
  const { currentUser } = useAuth();








  return (
    <BaseLayout>
      {/* <button onClick={test}>click</button> */}
      <HomepageMovies />
      <HomepageTrending />
      <HomepageTrailers />
    </BaseLayout>
  );
};

export default HomePage;