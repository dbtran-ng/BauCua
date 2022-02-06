import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function DemoSpring() {
  const propsAnim = useSpring({ opacity: 1, from: { opacity: 0 }, config: {duration: 3000} });
  return (
    <div>
      <animated.div style={propsAnim}>I will fade in</animated.div>
    </div>
  );
}
