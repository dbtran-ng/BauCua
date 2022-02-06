import React, { Component } from 'react';
import ContextProvider from './ContextProvider/ContextProvider';
import DemoReduxApp from './DemoRedux/DemoReduxApp';
import DemoSprings from './DemoRedux/DemoSprings';
import DemoTrail from './DemoRedux/DemoTrail';
import DemoTransition from './DemoRedux/DemoTransition';
import GameBauCua from './BaiTapTongHop/GameBauCua';
export default class App extends Component {
  render() {
    return (
      <div>
        <GameBauCua />
      </div>
    );
  }
}
