import styled, { keyframes } from 'styled-components';

// banner 缩放处理
// 设计稿尺寸
const designSize = 1920;
// 实际尺寸
const actualSize = window.innerWidth > 1200 ? window.innerWidth : 1200;
const scale = actualSize / designSize;

export const BannerWrap = styled.section`
  position: relative;
  margin-top: -80px;
  z-index: 1;
  &>img {
    max-width: 100%;
  }
`;

export const BannerInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const BannerMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  padding-bottom: ${200 * scale}px;
`;


const titleMove = keyframes`
  from {
    top: 0;
    opacity: 0.1;
  }
  to {
    top: ${140 * scale}px;
    opacity: 1;
  }
`

export const TitleWrap = styled.div`
  position: absolute;
  left: 50%;
  width: ${500 * scale}px;
  height: ${80 * scale}px;
  margin-left: -${250 * scale}px;
  font-size: ${40 * scale}px;
  font-weight: 100;
  text-align: center;
  line-height: ${80 * scale}px;
  color: #fff;
  background-color: rgba(153,91,219,.5);
  border: 1px solid #cdafed;
  border-radius: ${80 * scale}px;
  opacity: 0;
  animation: ${titleMove} 1s 3s ease;
  animation-fill-mode: forwards;
`;

const boyMove = keyframes`
  from {
    left: -200px;
    opacity: 0.1;
  }
  to {
    left: 0;
    opacity: 1;
  }
`

export const BoyWrap = styled.div`
  position: relative;
  opacity: 0;
  animation: ${boyMove} 2s 1s ease;
  animation-fill-mode: forwards;
  &>img {
    width: ${273 * scale}px;
    height: ${586 * scale}px;
  }
`;

const girlMove = keyframes`
  from {
    top: -100px;
    left: -110px;
    opacity: 0.1;
    transform: scale(0.1);
  }
  to {
    top: 0;
    left: 0;
    opacity: 1;
    transform: scale(1);
  }
`

export const GirlWrap = styled.div`
  position: relative;
  opacity: 0;
  animation: ${girlMove} 2s 2s ease;
  animation-fill-mode: forwards;
  &>img {
    width: ${258 * scale}px;
    height: ${520 * scale}px;
  }
`;

const catMove = keyframes`
  from {
    right: -100px;
    opacity: 0.1;
  }
  to {
    right: 0;
    opacity: 1;
  }
`

export const CatWrap = styled.div`
  position: relative;
  opacity: 0;
  animation: ${catMove} 2s 1s ease;
  animation-fill-mode: forwards;
  margin-left: -60px;
  &>img {
    width:  ${123 * scale}px;
    height: ${144 * scale}px;
  }
`;

export const ScorpioWrap = styled.div`
  position: absolute;
  left: ${160 * scale}px;
  top: ${60 * scale}px;
`;
