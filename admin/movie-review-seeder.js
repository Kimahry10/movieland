import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
// import { useState, useEffect } from 'react';

var reviewsRef = db.collection("projects")
  // .doc('f93da868-13d6-4a3b-9e4e-da251b77a776').collection('reviews')
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  })


// reviewsRef.doc(uuidv4()).set({
//   movieId: "movieID here", review: faker.lorem.sentence()
// });

// for (let i = 0; i < 1; i++) {
//   reviewsRef.doc("test").set({
//     movieId: i,
//     review: faker.lorem.paragraph(),
//     userId: uuidv4()
//   });
// }