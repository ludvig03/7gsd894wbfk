import React, { useEffect, useState } from 'react';

function Decode() {

  //create a digital clock count down for three minutes

  const [frys, setFrys] = useState(true);
  const [time, setTime] = useState(200);
  const [start, setStart] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        setTime((time) => time - 0.1);
      }, 100);
    } else if (!start && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, time]);

  useEffect(() => {
    if (frys === false) {
      setStart(true);
      const audio = new Audio('/morse.mp3');
      audio.loop = true;
      audio.play();
    }
  }, [frys]);

  function setInputFunc(e) {
    setInput(e.target.value);
    setFrys(false)
    console.log(input)
  }

  function handleDecode() {
    if (input === 'varmt') {
      window.alert('Du har klart å dekode koden, gratulerer!')
    } else {
      window.alert('Du har ikke klart å dekode koden, prøv igjen!')
    }
  }




  return (
    <div className="App mx-auto">
      <h1 className='text-4xl mb-6 mx-auto w-1/3'>Decode</h1>
      <div className=''>
        <h1 className='text-red-500 text-4xl mx-auto w-1/3'>{Math.round(time * 10) / 10}</h1>
      </div>
      <div className='block'>
          <input onChange={setInputFunc} className='border-2 rounded-lg border-red-600 text-black ml-20 mt-8' placeholder='Skriv inn kode'></input>
      </div>
      <button onClick={handleDecode} className='mt-4 mx-auto border-2 font-bold py-2 px-4 rounded ml-20'>Dekod</button>
      <img src="https://scoutlife.org/wp-content/uploads/2007/02/morsecode-1.jpg?w=700"></img>
    </div>
  );

}

export default Decode;