import React, { Component } from 'react';

import {
  BannerWrap,
  BannerInner,
  TitleWrap,
  BannerMain,
  BoyWrap,
  GirlWrap,
  CatWrap,
  ScorpioWrap,
} from './style';

import Scorpio from '../scorpio';
import BannerBg from '../../static/image/index-bg.png';
import BoyImg from '../../static/image/boy.png';
import GirlImg from '../../static/image/girl.png';
import CatImg from '../../static/image/cat.png';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BannerWrap>
        <img src={BannerBg} alt='banner-bg' />
        <BannerInner>
          <ScorpioWrap>
            <Scorpio></Scorpio>
          </ScorpioWrap>
          <TitleWrap>Hello, I'm Wengang Xiong!</TitleWrap>
          <BannerMain>
            <BoyWrap>
              <img src={BoyImg} alt="boy" />
            </BoyWrap>
            <CatWrap>
              <img src={CatImg} alt="cat" />
            </CatWrap>
            <GirlWrap>
              <img src={GirlImg} alt="girl" />
            </GirlWrap>
          </BannerMain>
        </BannerInner>
      </BannerWrap>
    )
  }
  componentDidMount() {
  }
}

export default Banner;

/**
 * banner动画
 * 
 * 这里不适合使用react-transition-group插件
 * transition动画优化在于简单易用，但是有几个很大的局限
 * 1. 需要时间出发，所以没法再网页加载时自动发生
 * 2. 一次性，不能重复发生，除非一再触发
 * 3. 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态
 * 4. 一条transition规则，只能定义一个属性的变化，不能涉及多个属性
 *
 * 还是得使用animation配合keyframe使用
 */
