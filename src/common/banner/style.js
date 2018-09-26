import styled from 'styled-components';

export const BannerWrap = styled.section`
  position: relative;
  margin-top: -80px;
  z-index: -1;
  &>img {
    max-width: 100%;
  }

  /* 标题动画 */
  &.title-enter {
    opacity: 0.1;
    top: 0;
	}
	&.title-enter-active {
    opacity: 1;
		top: 120px;
    transition: all 0.3s ease-out;
	}
	/* &.title-exit {
    opacity: 1;
    top: 120px;
	}
	&.title-exit-active {
		opacity: 0.1;
    top: 0;
    transition: all 0.3s ease-out;
	} */
`;

export const TitleWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 500px;
  height: 80px;
  margin-left: -250px;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  line-height: 80px;
  color: #fff;
  background-color: rgba(153,91,219,.5);
  border: 1px solid #cdafed;
  border-radius: 80px;
  /* opacity: 0; */
  /* animation: titleMove 1s 3s ease; */
  /* animation-fill-mode: forwards; */
`;
