import styled, { keyframes } from 'styled-components';

const lineMove = keyframes`
  to {
    stroke-dashoffset: 0
  }
`

const twinkle = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.1;
  }
`

export const SvgWrap = styled.div`
  .star {
    animation-name: ${twinkle};
  }

  .line {
    stroke: rgba(255, 255, 255, 0.5);
    fill: none;
    stroke-width: 1;
  }

  .line1 {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
  }
    
  .line2, .line3 {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
  }
  
  .svg-scorpio {
    display: block;
    &:hover .line1 {
      animation: ${lineMove} 2s linear forwards
    }
    &:hover .line2 {
      animation: ${lineMove} 1.5s 2s linear forwards
    }
    &:hover .line3 {
      animation: ${lineMove} 1.5s 2s linear forwards
    }
  }
}
`