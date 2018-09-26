import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './store';

const data = {
  width: 85,
  height: 25,
  x: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1]
  ],
  w: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
  ],
  g: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0]
  ],
  colorList: [
    '#d40045', '#ee0026', '#ff590b', '#ff7f00', '#ffcc00', '#cce708', '#99cf15',
    '#66b82b', '#33a23d', '#008f62', '#008678', '#007a87', '#055D87', '#093f86',
    '#0f218b', '#281285', '#340c81', '#56007d', '#af0065', '#f9344c', '#fc4e32',
    '#ff9914', '#fff231', '#99d02b', '#33a65e', '#1d86ae', '#6964ad', '#a45aaa',
    '#df4c94', '#ca1028', '#cc4613', '#d9760f', '#990f4f', '#9e002c', '#a34a02',
    '#a38204', '#518517', '#2f6f41', '#073e73', '#232166', '#531460', '#740050',
    '#fa7482', '#fb8072', '#FDB46C', '#fff27b', '#b3de69', '#7fc97e', '#66c2ae',
    '#67b2ca', '#679fca', '#807dba', '#b172b6', '#e170a4', '#c95f6a', '#d77856',
    '#d89048', '#ccba48', '#b3b140', '#66ac78', '#4e9b86', '#4f8b97', '#516690',
    '#5d5791', '#4e9b86', '#b15076', '#b25938', '#b25938', '#997f42', '#747e47',
    '#5a804b', '#2a6b68', '#1e6268', '#214274', '#632a31', '#6c4919', '#695b18',
    '#56561a', '#345934', '#16344f', '#312c4b', '#4a304b', '#3a2c2e', '#3a2c2a',
    '#463B34', '#3e3f31', '#24342d', '#283539', '#222831', '#2e2a31', '#7d4f5b',
    '#7d5f61', '#7d6764', '#7d6f59', '#636e5b', '#486c5c', '#384e5d', '#3f2f50',
    '#493753', '#d7a4b6', '#d8afa7', '#d9ba97', '#d9c69b', '#aac09b', '#91b8ac',
    '#91afbb', '#91a4b6', '#9191ad', '#a997b0', '#c09eb3', '#fbb4c4', '#fdcdb7',
    '#ffffb3', '#e6f5b0', '#ccebc5', '#b3e2d8', '#b3d7dd', '#b3cde3', '#C09EB3',
    '#cab2d6', '#e3add5'
  ],
  // lastTime: 0,
}

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTime: 0,
    }
  }
  render() {
    return (
      <canvas
        ref='canvas'
        width={data.width * 2}
        height={data.height * 2}
        style={{ width: data.width, height: data.height }}>
      </canvas>
    );
  }
  componentDidMount() {
    this.drawAll();
    window.requestAnimationFrame(this.drawInit.bind(this));
  }
  drawInit(timestamp) {
    const {
      startTime,
      duringTime,
      changeStartTime,
    } = this.props;
    let progressTime = timestamp - startTime;
    console.log(progressTime, timestamp, startTime)
    if (progressTime > duringTime) {
      this.drawAll();
      changeStartTime(timestamp);
      window.requestAnimationFrame(this.drawInit.bind(this));
    }
  }
  drawAll() {
    this.drawReact(data.x, 0);
    this.drawReact(data.w, data.height * 2 + 10);
    this.drawReact(data.g, (data.height * 2 + 10) * 2);
  }
  drawReact(ele, space) {
    const c = this.refs.canvas;
    const ctx = c.getContext('2d');
    for (let i = 0; i < ele.length; i++) {
      for (let j = 0; j < ele[i].length; j++) {
        if (ele[i][j]) {
          ctx.fillStyle = data.colorList[Math.floor(Math.random() * data.colorList.length)];
          ctx.fillRect(data.height / 5 * 2 * j + space, data.height / 5 * 2 * i, data.height / 5 * 2 - 2, data.height / 5 * 2 - 2);
        }
      }
    }
  }
};

const mapState = (state) => {
  return {
    startTime: state.getIn(['logo', 'startTime']),
    duringTime: state.getIn(['logo', 'duringTime']),
  }
};

const mapDispath = (dispatch) => {
  return {
    changeStartTime(time) {
      dispatch(actions.changeStartTime(time));
    }
  }
}

export default connect(mapState, mapDispath)(Logo);
