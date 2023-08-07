'use client'

import { useState } from 'react'

export function Ant() {
  const [phone, setPhone] = useState('');

  const getInputNumbersValue = (input) => {
    return input.replace(/\D/g, '');
  }

  const onPhonePaste = (e) => {
    e.preventDefault();
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(e.clipboardData.getData('Text'));

    if (inputNumbersValue) {
      setPhone(formatPhoneNumber(inputNumbersValue));
    }
  }

  const formatPhoneNumber = (inputNumbersValue) => {
    let formattedValue = '';

    if (['7', '8', '9'].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;
      formattedValue = '+7 ';
      if (inputNumbersValue.length > 1) {
        formattedValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedValue = '+' + inputNumbersValue.substring(0, 16);
    }

    return formattedValue;
  }

  const onPhoneInput = (e) => {
    const input = e.target;
    const inputNumbersValue = getInputNumbersValue(input.value);
    const formattedPhoneNumber = formatPhoneNumber(inputNumbersValue);

    setPhone(formattedPhoneNumber);
  }

  const onPhoneKeyDown = (e) => {
    if (e.key === 'Backspace' && phone.length === 1) {
      setPhone('');
    }
  }

  return (
    <div>
      <label htmlFor='phone'>Введіть номер телефону:</label>
      <input
        type='text'
        placeholder='+38 (___) ___ __ __'
        value={phone}
        onKeyDown={onPhoneKeyDown}
        onInput={onPhoneInput}
        onPaste={onPhonePaste}
      />
    </div>
  );
}
