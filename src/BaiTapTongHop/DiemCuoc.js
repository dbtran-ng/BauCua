import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
export default function DiemCuoc(props) {
  const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="text-center display-4" style={{ color: 'green', marginTop: '0px'}}>
        GAME BẦU CUA
      </h3>
      <div className="text-center mt-5">
        <span
          style={{ fontSize: '20px', borderRadius: '5px' }}
          className="p-3 text-white bg-danger"
        >
          Tiền Thưởng: <span style={{ color: 'yellow' }}>$ {tongDiem.toLocaleString()}</span>
        </span>
      </div>

      <div className="text-center mt-5">
        <button
          onClick={() => {dispatch({
            type: 'PLAY_AGAIN'
          })}}
          style={{ fontSize: '16px', borderRadius: '5px', border:'none' }}
          className="p-3 text-white bg-success"
        >
          Chơi lại
        </button>
      </div>
    </div>
  );
}
