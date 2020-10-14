import React from 'react';
import Line from './components/Line'

function App() {

  const r = 255;
  const g = 0;
  const b = 0;

  const cR = Math.max(r, b, g) + Math.min(r, b, g) - r
  const cG = Math.max(r, b, g) + Math.min(r, b, g) - g
  const cB = Math.max(r, b, g) + Math.min(r, b, g) - b

  return (
    <>
      <Line startColor={[r, g, b]} endColor={[cR, cG, cB]} />
      <Line startColor={[g, r, b]} endColor={[cG, cR, cB]} />
      <Line startColor={[b, g, r]} endColor={[cB, cG, cR]} />
      <Line startColor={[r, b, g]} endColor={[cR, cB, cG]} />
      <Line startColor={[g, b, r]} endColor={[cG, cB, cR]} />
      <Line startColor={[b, r, g]} endColor={[cB, cR, cG]} />
    </>
  );
}

export default App;
