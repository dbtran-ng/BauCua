import React from 'react';
import XucXac from './XucXac';
import { head, deburr } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
export default function DanhSachXucXac() {
  const mangXucXac = useSelector((state) => state.GameBauCuaReducer.mangXucXac);
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <div
        className="bg-white"
        style={{ width: 300, height: 300, borderRadius: '50%' }}
      >
        <div>
          <div className="row">
            <div className="col-12 text-right" style={{ marginLeft: '25%' }}>
              <XucXac xucXacItem={mangXucXac[0]} />
            </div>
            <div className="col-6 text-right">
              <XucXac xucXacItem={mangXucXac[1]} />
            </div>
            <div className="col-6 text-right">
              <XucXac xucXacItem={mangXucXac[2]} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: '25%', marginTop: '5%' }}>
        <button onClick={()=>{
          dispatch({ 
            type: 'PLAY_GAME'
          })
        }} className="btn btn-success" style={{ fontSize: '25px' }}>
          Xốc
        </button>
      </div>
    </div>
  );
}
