import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import Line from './components/Line'
import { Form } from '@unform/web';

export function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
}

function App() {

  const [color, setColor] = useState(255);

  function handleSubmit({ colorStart }) {
    setColor(colorStart)
  }

  const r = color;
  const g = 0;
  const b = 0;

  const cR = Math.max(r, b, g) + Math.min(r, b, g) - r
  const cG = Math.max(r, b, g) + Math.min(r, b, g) - g
  const cB = Math.max(r, b, g) + Math.min(r, b, g) - b

  return (
    <>
      <Form style={{ background: '#fff', border: '1px solid #000', position: 'fixed', margin: '20px', padding: '20px', opacity: .85 }} onSubmit={handleSubmit}>
        <Input name="colorStart" defaultValue={color} type="range" min="0" max="255" />
        <span>{color}</span>
        <button type="submit">Gerar</button>
      </Form>
      <Line startColor={[r, g, b]} endColor={[cR, cG, cB]} />
      <Line startColor={[r, g, b]} endColor={[cR, cG, cB]} />
      <Line startColor={[g, r, b]} endColor={[cG, cR, cB]} />
      <Line startColor={[g, r, b]} endColor={[cG, cR, cB]} />
      <Line startColor={[b, g, r]} endColor={[cB, cG, cR]} />
      <Line startColor={[b, g, r]} endColor={[cB, cG, cR]} />
      <Line startColor={[r, b, g]} endColor={[cR, cB, cG]} />
      <Line startColor={[r, b, g]} endColor={[cR, cB, cG]} />
      <Line startColor={[g, b, r]} endColor={[cG, cB, cR]} />
      <Line startColor={[g, b, r]} endColor={[cG, cB, cR]} />
      <Line startColor={[b, r, g]} endColor={[cB, cR, cG]} />
      <Line startColor={[b, r, g]} endColor={[cB, cR, cG]} />
    </>
  );
}

export default App;
