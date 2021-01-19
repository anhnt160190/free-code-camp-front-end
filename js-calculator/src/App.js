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
  const [display, setDisplay] = useState(null);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [operator, setOperator] = useState(null);

  const onClickBtn = (btnId) => {
    const btnItem = buttons.find((item) => item.id === btnId);
    if (!btnItem) return;
    if (btnItem.type === BTN_TYPE.CLEAR) {
      setDisplay(null);
      return;
    }
    if (btnItem.type === BTN_TYPE.EQUAL) {
      return;
    }
    if (btnItem.type === BTN_TYPE.MATH_OPERATOR && btnItem.value !== operator) {
      setFirst(display);
      setOperator(operator);
      // setDisplay(btnItem.value);
      return;
    }
    if (btnItem.type === BTN_TYPE.DECIMAL_POINT && display.includes('.')) return;
    if (!display && btnItem.value === '0') return;
    setDisplay(display + btnItem.value);
  };

  return (
    <div className="App" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
          {display || 0}
        </div>
      </div>
    </div>
  );
}

export default App;
