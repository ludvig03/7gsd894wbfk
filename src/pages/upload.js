import React from 'react'
import { getStorage, ref, uploadBytes } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();
const storageRef = ref(storage, '/images');

// 'file' comes from the Blob or File API

// let user take a photo and upload it to firebase storage in the images folder

function uploadImage() {
    const file = document.getElementById('file').files[0];
    const name = "bilde";
    const imageRef = ref(storage, 'images/' + name);
    uploadBytes(imageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
}


function upload() {
    return (
        <div>
            <input type="file" id="file" />
            <button onClick={uploadImage} className="border-2">Upload</button>
        </div>
    )
}




export default upload