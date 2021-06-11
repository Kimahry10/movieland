import { admin, app, auth, db, generateTimestamps, generateValueBetweenMinAndMax } from './firebase';
import faker from 'faker';
import { v4 as uuidv4 } from 'uuid';
// import { useState, useEffect } from 'react';

var reviewsRef = db.collection("projects")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
