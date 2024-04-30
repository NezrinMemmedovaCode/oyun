import React, { useState } from 'react';

const TaşKağıtMakas = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const choices = ['tas', 'kagit', 'makas'];

  const computerPlay = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'Berabere';
    if (
      (user === 'tas' && computer === 'makas') ||
      (user === 'kagit' && computer === 'tas') ||
      (user === 'makas' && computer === 'kagit')
    ) {
      return 'qazandiniz!';
    } else {
      return 'uduzdunuz!';
    }
  };

  const playGame = (userChoice) => {
    const computerChoice = computerPlay();
    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setResult(determineWinner(userChoice, computerChoice));
  };

  return (
    <div>
      <h1>tas kagit Makas</h1>
      <p>secim edin:</p>
      <div>
        <button onClick={() => playGame('tas')}>Taş</button>
        <button onClick={() => playGame('kagit')}>Kağıt</button>
        <button onClick={() => playGame('makas')}>Makas</button>
      </div>
      {userChoice && computerChoice && (
        <div>
          <p>Siz: {userChoice}</p>
          <p>komputer: {computerChoice}</p>
          <p>netice: {result}</p>
        </div>
      )}
    </div>
  );
};

export default TaşKağıtMakas;
