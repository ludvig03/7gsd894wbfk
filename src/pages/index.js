import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-Izc_Bx11r3Y3kHi_42_t4uNfPx6DIzM",
  authDomain: "paskeegg-img.firebaseapp.com",
  projectId: "paskeegg-img",
  storageBucket: "paskeegg-img.appspot.com",
  messagingSenderId: "524627567896",
  appId: "1:524627567896:web:7423f9e3639ab8dcafaa6d",
  measurementId: "G-9NEMJYNZQD"
};
const app = initializeApp(firebaseConfig);

function Home() {

  //download the latest photo in my firebase storage

  const [image, setImage] = useState(null);

  // download latest image from my firebase storage and save it to the image state, this is the folder path gs://paskeegg-img.appspot.com/images

  const storage = getStorage();
  const storageRef = ref(storage, '/images');
  const imageRef = ref(storage, 'images/bilde');

  useEffect(() => {
    getDownloadURL(imageRef).then((url) => {
      setImage(url);
    }).catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          console.log('File doesnt exist');
          break;
        case 'storage/unauthorized':
          console.log('User doesnt have permission to access the object');
          break;
        case 'storage/canceled':
          console.log('User canceled the upload');
          break;
        case 'storage/unknown':
          console.log('Unknown error occurred, inspect the server response');
          break;
      }
    });
  }, []);

  

  









  const router = Router;

  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('1234');

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');


  const handleLogin = () => {
    var event = new Date();
    time = event.toLocaleTimeString('en-US');
    var time = time.replace(/[^0-9]/g, '');
    var time = time.slice(2, -2);

    if (inputUsername === username && inputPassword === password && time % 2==0) {
      console.log('Logged in');
      router.push('/decode');
    } else {
      if (inputUsername === username && inputPassword === password && time % 2!=0) {
        window.alert("tiden er ikke inne")
      } else {
        if (inputUsername === username && inputPassword != password) {
          window.alert("Søren, de skjulte portene forblir forseglet, for nøkkelen du bærer er ikke passende låsens intrikate mønster.")
        } else {
          if (inputUsername != username && inputPassword === password) {
            window.alert("Søken etter den mystiske brukeren fortsetter, for navnet som ble angitt er ikke registrert i våre arkiver.")
          } else {
            window.alert("De mystiske portene forblir forseglet, da både nøkkelen du har og brukernavnet du har angitt, ikke passer til mønsteret som kreves for å få tilgang.")
          }
        }
      }
    }
  }

  // download image from firebase storage and display it

  


  function setInputUsernameFunc(e) {
    setInputUsername(e.target.value);
  }

  function setInputPasswordFunc(e) {
    setInputPassword(e.target.value);
  }


  return (
    <div className="App w-3/4 mx-auto">
    <h1 className='text-4xl mb-6 mx-auto w-44'>Login side</h1>
      <div className=''>
        <input className='border-2 rounded-lg border-red-600 text-black' onChange={setInputUsernameFunc} placeholder='Brukernavn'></input>
        <input className='border-2 rounded-lg border-red-600 text-black' onChange={setInputPasswordFunc} placeholder='Passord'></input>
      </div>
      <div className=''>
        <button onClick={()=>{handleLogin()}} className='mt-4 mx-auto border-2 font-bold py-2 px-4 rounded'>Logg inn</button>
        <img src={image}></img>
      </div>
    </div>
  );
}

export default Home;