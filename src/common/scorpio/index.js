import React, { Component } from 'react';

import {
  SvgWrap,
} from './style';

import star from '../../static/image/star.png';

const data = {
  type: {
    mini: 8,
    small: 12,
    large: 14
  },
  animation: {
    mini: 1,
    small: 2,
    large: 3
  },
  points: [
    { x: 4, y: 164, size: 'mini' },
    { x: 30, y: 150, size: 'mini' },
    { x: 20, y: 180, size: 'mini' },
    { x: 40, y: 196, size: 'mini' },
    { x: 70, y: 190, size: 'mini' },
    { x: 90, y: 170, size: 'small' },
    { x: 100, y: 140, size: 'mini' },
    { x: 90, y: 106, size: 'mini' },
    { x: 104, y: 76, size: 'small' },
    { x: 120, y: 60, size: 'small' },
    { x: 144, y: 50, size: 'large' },
    { x: 176, y: 24, size: 'small' },
    { x: 160, y: 4, size: 'mini' },
    { x: 190, y: 60, size: 'small' },
    { x: 196, y: 86, size: 'mini' }
  ],
}

class Scorpio extends Component {
  constructor(props) {
    super(props);
    this.getLine = this.getLine.bind(this);
  }
  render() {
    return (
      <SvgWrap>
        <svg width='200' height='200' className='svg-scorpio' xmlns='http://www.w3.org/2000/svg' version='1.1'>
          <g>
            {
              data.points.map((item, index) => {
                return (
                  <image
                    className='star'
                    xlinkHref={star}
                    v-for='(item, index) in points'
                    key={index}
                    x={item.x - data.type[item.size]/2}
                    y={item.y - data.type[item.size]/2}
                    width={data.type[item.size]}
                    height={data.type[item.size]}
                  />
                )
              })
            }
          </g>
          <polyline className={'line line1'} points={this.getLine(1)} />
          <polyline className={'line line2'} points={this.getLine(2)} />
          <polyline className={'line line3'} points={this.getLine(3)} />
        </svg>
      </SvgWrap>
    )
  }
  componentDidMount() {
    this.twinkle();
  }
  twinkle () {
    const stars = document.querySelectorAll('.star');
    stars.forEach(val => {
      val.style.animationDuration = `${Math.random() + 2}s`;
      val.style.animationTimingfunction = 'ease-out';
      val.style.animationIterationCount = 'infinite';
    })
  }
  getLine(type) {
    let res = [];
    data.points.forEach((val, idx, arr) => {
      if (type === 1) {
        if (idx < 12) {
          res.push(`${val.x} ${val.y}`)
        }
      } else if (type === 2) {
        if (idx > 10 && idx < 13) {
          res.push(`${val.x} ${val.y}`)
        }
      } else {
        if (idx === 11) {
          res.push(`${val.x} ${val.y}`)
        }
        if (idx > 12) {
          res.push(`${val.x} ${val.y}`)
        }
      }
    });
    return res.join(',');
  }
}

export default Scorpio;
