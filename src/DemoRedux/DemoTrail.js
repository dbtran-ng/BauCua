import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';

const items = [
  { title: 'FrontEndOnline', content: 'cyberlearn' },
  { title: 'FrontEndOffline', content: 'cyber' },
  { title: 'FrontEnd', content: 'cyberstudy' },
];
export default function DemoTrail() {
  let [status, setStatus] = useState(true);

  const [propsUseTrail, set, stop] = useTrail(items.length, () => {
    return {
      opacity: status ? 1 : 0,
      x: status ? 0 : 20,
      height: status ? 80 : 0,
      color: 'red',
      from: { opacity: 0, x: 20, height: 0, color: 'green' },
      config: { duration: 1000 },
    };
  });


  return (
    <div>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        setStatus
      </button>
      <button
        onClick={() => {
          set({ color: 'blue' });
        }}
      >
        setColor
      </button>
      {propsUseTrail.map((prop, index) => {
        return (
          <animated.h1 key={index} style={prop}>
            {items[index].title}
          </animated.h1>
        );
      })}
    </div>
  );
}
