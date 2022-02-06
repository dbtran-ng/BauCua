import React from 'react';
import { useDispatch } from 'react-redux';
import { useSpring, animated } from 'react-spring';
export default function QuanCuoc(props) {
  const quanCuoc = props.quanCuoc;

  const dispatch = useDispatch();
  const [propsUseSpringIncrease, setIncrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 0.75 },
      reset: true,
    };
  });
  const [propsUseSpringDecrease, setDecrease] = useSpring(() => {
    return {
      to: { scale: 1.25 },
      from: { scale: 0.75 },
      reset:true
    };
  });
  return (
    <div className="mt-3" style={{ width: '65%' }}>
      <img
        style={{ width: '100%' }}
        src={quanCuoc.hinhAnh}
        alt={quanCuoc.hinhAnh}
      />
      <div style={{ backgroundColor: 'green' }} className="m-2 text-center">
        <animated.button
          style={{
            transform: propsUseSpringIncrease.scale.to(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setIncrease({ scale: 1})
            setIncrease({ scale: 1.25 });

            dispatch({
              type: 'DAT_CUOC',
              quanCuoc,
              tangGiam: true,
            });
          }}
          className="m-2 btn btn-success"
        >
          +
        </animated.button>
        <span style={{ color: 'yellow', fontSize: 18 }}>
          {quanCuoc.diemCuoc}
        </span>
        <animated.button
          style={{
            transform: propsUseSpringDecrease.scale.to(
              (scale) => `scale(${scale})`
            ),
          }}
          onClick={() => {
            setDecrease({ scale: 1 });
            setDecrease({ scale: 1.25 });
            dispatch({
              type: 'DAT_CUOC',
              quanCuoc,
              tangGiam: false,
            });
          }}
          className="m-2 btn btn-success"
        >
          -
        </animated.button>
      </div>
    </div>
  );
}
