import React, { useState } from 'react';
import Router from 'next/router';

function Home() {

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
        <img src="https://i.ibb.co/F0Wy6WP/image.jpg"></img>
      </div>
    </div>
  );
}

export default Home;