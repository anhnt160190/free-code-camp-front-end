import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { DrumPadItem } from './components/DrumPad';

const drumpads = [
  { id: 1, name: 'Q', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 2, name: 'W', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 3, name: 'E', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  {
    id: 4,
    name: 'A',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  },
  { id: 5, name: 'S', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  {
    id: 6,
    name: 'D',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  },
  {
    id: 7,
    name: 'Z',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  },
  {
    id: 8,
    name: 'X',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  },
  {
    id: 9,
    name: 'C',
    audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  },
];

function App() {
  const [display, setDisplay] = useState('');

  const handleKeyDown = useCallback((e) => {
    const drumItem = drumpads.find((item) => item.name.toLowerCase() === e.key.toLowerCase());
    if (!drumItem) return;
    setDisplay(drumItem.name);
    const audioItem = document.getElementById(drumItem.name);
    audioItem.play();
  }, []);

  const drumPadClick = (drumPad) => {
    const drumItem = drumpads.find((item) => item.id === drumPad.id);
    if (!drumItem) return;
    setDisplay(drumItem.name);
    const audioItem = document.getElementById(drumItem.name);
    audioItem.play();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="App">
      <div id="drum-machine">
        {drumpads.map((item, index) => (
          <DrumPadItem key={index} drumPad={item} onClick={drumPadClick} />
        ))}
        <div id="display">{display}</div>
      </div>
    </div>
  );
}

export default App;
