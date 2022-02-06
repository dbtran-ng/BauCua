import React, { Fragment } from 'react';
import { SpringContext, useSpring, animated } from 'react-spring';
export default function XucXac(props) {
  let { xucXacItem } = props;

  const [propsDice, set] = useSpring(() => ({
    reset: true,
    to: {
      xyz: [360, 0, 0],
    },
    from: {
      xyz: [0, 0, 0],
    },
    config: {
      duration: 1000,
    }
  }));
  set({ xyz: [360, 0, 0] });
  return (
    <Fragment>
      <div className="scene">
        <animated.div
          className="cube"
          style={{
            transform: propsDice.xyz.to(
              (x, y, z) =>
                `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
            )
          }}
        >
          <img
            className="ml-2 cube__face front"
            style={{ width: 50 }}
            src={xucXacItem.hinhAnh}
            alt="xucxac"
          />
          <img
            className="ml-2 cube__face back"
            style={{ width: 50 }}
            src="./img/bau.png"
            alt="xucxac"
          />
          <img
            className="ml-2 cube__face left"
            style={{ width: 50 }}
            src="./img/ga.png"
            alt="xucxac"
          />
          <img
            className="ml-2 cube__face right"
            style={{ width: 50 }}
            src="./img/ca.png"
            alt="xucxac"
          />
          <img
            className="ml-2 cube__face top"
            style={{ width: 50 }}
            src="./img/tom.png"
            alt="xucxac"
          />
          <img
            className="ml-2 cube__face bottom"
            style={{ width: 50 }}
            src="./img/nai.png"
            alt="xucxac"
          />
        </animated.div>
      </div>
    </Fragment>
  );
}
