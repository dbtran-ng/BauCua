const initialState = {
  danhSachCuoc: [
    { ma: 'ga', hinhAnh: './img/ga.png', diemCuoc: 0 },
    { ma: 'bau', hinhAnh: './img/bau.png', diemCuoc: 0 },
    { ma: 'ca', hinhAnh: './img/ca.png', diemCuoc: 0 },
    { ma: 'nai', hinhAnh: './img/nai.png', diemCuoc: 0 },
    { ma: 'cua', hinhAnh: './img/cua.png', diemCuoc: 0 },
    { ma: 'tom', hinhAnh: './img/tom.png', diemCuoc: 0 },
  ],
  tongDiem: 1000,
  mangXucXac: [
    { ma: 'nai', hinhAnh: './img/nai.png' },
    { ma: 'cua', hinhAnh: './img/cua.png' },
    { ma: 'tom', hinhAnh: './img/tom.png' },
  ],
};

const GameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DAT_CUOC': {
      const danhSachCuocUpdate = [...state.danhSachCuoc];
      const index = danhSachCuocUpdate.findIndex(
        (qc) => qc.ma === action.quanCuoc.ma
      );
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongDiem > 0) {
            danhSachCuocUpdate[index].diemCuoc += 100;
            state.tongDiem -= 100;
          }
        } else {
          if (danhSachCuocUpdate[index].diemCuoc > 0) {
            danhSachCuocUpdate[index].diemCuoc -= 100;
            state.tongDiem += 100;
          }
        }
      }
      state.danhSachCuoc = danhSachCuocUpdate;
      return { ...state };
    }
    case 'PLAY_GAME': {
      const mangXucXacRandom = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        const xucXacRandom = state.danhSachCuoc[soNgauNhien];
        mangXucXacRandom.push(xucXacRandom);
      }
      // update state.mangXucXac
      state.mangXucXac = mangXucXacRandom;
      console.log(state.mangXucXac);

      mangXucXacRandom.forEach((xucXac, i) => {
        const index = state.danhSachCuoc.findIndex((qc) => qc.ma === xucXac.ma);
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[index].diemCuoc;
        }
      });
      // hoan tien
      state.danhSachCuoc.forEach((qc, i) => {
        let index = mangXucXacRandom.findIndex((xx) => xx.ma === qc.ma);
        if (index !== -1) {
          state.tongDiem += qc.diemCuoc;
        }
      });
      //xu ly lam moi game
      state.danhSachCuoc = state.danhSachCuoc.map((qc, i) => {
        return { ...qc, diemCuoc: 0 };
      });
      return { ...state };
    }
    case 'PLAY_AGAIN': {
      state.tongDiem = 1000;
      state.danhSachCuoc = state.danhSachCuoc.map((qc, i) => {
        return { ...qc, diemCuoc: 0 };
      });
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GameBauCuaReducer;
