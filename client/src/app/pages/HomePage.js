import { BaseLayout } from '../layouts';
import { HomepageMovies, HomepageTrending, HomepageTrailers} from '../components/project/'
import { useAuth } from "../contexts/firebase";
import firebase from '../utilities/firebase';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

const HomePage = () => {
  const { currentUser } = useAuth();

 


//  async  function  test () {
//     var reviewsRef = await firebase.firestore().collection("projects")
//     .doc('f93da868-13d6-4a3b-9e4e-da251b77a776').collection('reviews').get()

//     // reviewsRef.doc("client test2").set({
//     //   movieId: 550,
//     //   review: faker.lorem.paragraph(),
//     //   userId: currentUser.uid
//     // });
//     // .get()
//     console.log(reviewsRef)
//   }



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