import styled from 'styled-components';

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const HeraderInner = styled.div`
  position: relative;
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export const NavWrap = styled.nav`
  &>.link {
    margin: 0 36px;
    color: rgba(255,255,255,.5);
  }
  &>.link:hover {
    color: #fff;
    transition: 0.5s;
  }
  &>.link.active {
    color: #fff;
  }
`;