import { useState } from 'react';

import './App.css';
import { Button } from './components/Button';
import { BTN_TYPE } from './shared/constant';

const buttons = [
  { id: 'zero', value: '0', type: BTN_TYPE.NUMBER },
  { id: 'one', value: '1', type: BTN_TYPE.NUMBER },
  { id: 'two', value: '2', type: BTN_TYPE.NUMBER },
  { id: 'three', value: '3', type: BTN_TYPE.NUMBER },
  { id: 'four', value: '4', type: BTN_TYPE.NUMBER },
  { id: 'five', value: '5', type: BTN_TYPE.NUMBER },
  { id: 'six', value: '6', type: BTN_TYPE.NUMBER },
  { id: 'seven', value: '7', type: BTN_TYPE.NUMBER },
  { id: 'eight', value: '8', type: BTN_TYPE.NUMBER },
  { id: 'nine', value: '9', type: BTN_TYPE.NUMBER },
  { id: 'equals', value: '=', type: BTN_TYPE.EQUAL },
  { id: 'add', value: '+', type: BTN_TYPE.MATH_OPERATOR },
  { id: 'subtract', value: '-', type: BTN_TYPE.MATH_OPERATOR },
  { id: 'multiply', value: '*', type: BTN_TYPE.MATH_OPERATOR },
  { id: 'divide', value: '/', type: BTN_TYPE.MATH_OPERATOR },
  { id: 'decimal', value: '.', type: BTN_TYPE.DECIMAL_POINT },
  { id: 'clear', value: 'C', type: BTN_TYPE.CLEAR },
];

function App() {
  const [display, setDisplay] = useState([]);

  const onClickBtn = (btnId) => {
    const btnItem = buttons.find((item) => item.id === btnId);
    if (!btnItem) return;
    if (btnItem.type === BTN_TYPE.CLEAR) {
      setDisplay([]);
      return;
    }
    if (btnItem.type === BTN_TYPE.EQUAL) {
      const regex = /([+*\-\\]){3,}/g;
      const newArray = [...display];
      const check = regex.test(newArray.join(''));
      if (check) {
        setDisplay([eval(newArray.join('').split(regex).join(' '))]);
      } else {
        setDisplay([eval(display.join(' '))]);
      }
      return;
    }
    if (btnItem.type === BTN_TYPE.MATH_OPERATOR) {
      if (display.length === 0 && (btnItem.value === '*' || btnItem.value === '/')) return;
      setDisplay([...display, btnItem.value]);
      return;
    }
    if (btnItem.value === '0' && display[display.length - 1] == 0) {
      return;
    }
    if (
      btnItem.type === BTN_TYPE.DECIMAL_POINT &&
      display[display.length - 1] &&
      display[display.length - 1].includes('.')
    )
      return;
    const newDisplay = [...display];
    if (newDisplay.length === 0) {
      newDisplay.push(btnItem.value);
    } else {
      newDisplay[newDisplay.length - 1] = newDisplay[newDisplay.length - 1] + btnItem.value;
    }
    setDisplay(newDisplay);
  };

  return (
    <div
      className="App"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
        {buttons.map((item, index) => (
          <Button button={item} key={index} onClickBtn={onClickBtn} />
        ))}
        <div
          id="display"
          style={{
            border: '1px solid #000',
            width: 300,
            height: 32,
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            margin: 5,
            padding: '0 5px',
          }}
        >
          {display.length === 0 ? 0 : display.join('')}
        </div>
      </div>
    </div>
  );
}

export default App;
