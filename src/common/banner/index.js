import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  BannerWrap,
  TitleWrap,
} from './style';

import BannerBg from '../../static/image/index-bg.png'

class Banner extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <BannerWrap>
        <img src={BannerBg} alt='banner-bg' />
        <CSSTransition
          in={true}
          timeout={200}
          classNames="title"
        >
          <TitleWrap>Hello, I'm Wengang Xiong!</TitleWrap>
        </CSSTransition>
      </BannerWrap>
    )
  }
}

export default Banner;
