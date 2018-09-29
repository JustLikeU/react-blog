import styled from 'styled-components';

export const MainWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ContentWrap = styled.div`
  padding: 60px 70px;
  margin: 40px 0;
  background-color: #fff;
  border-radius: 4px;
`;

export const H2Wrap = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: 36px;
`;

export const ListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

// 区分文章和项目card部分样式
export const ItemWrap = styled.li`
  position: ${props => props.project ? 'relative' : ''};
  width: 330px;
  margin-bottom: 35px;
  overflow: ${props => props.project ? 'hidden' : ''};

  &:hover {
    box-shadow: ${props => props.project ? '' : '2px 6px 8px 0 rgba(51,51,51,.2)'};
    transition: ${props => props.project ? '' : '0.5s'};

    .cover {
      transform: ${props => props.project ? 'scale(1.2)' : ''};
      transition: ${props => props.project ? '1s' : ''};
    }
  }
`;

export const ImageWrap = styled.div.attrs({
  className: 'cover',
})`
  width: 330px;
  height: 220px;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: 50%;
  border-radius: ${props => props.project ? '4px' : '4px 4px 0 0'};
  overflow: hidden;
`;

export const ArticleH3Wrap = styled.h3`
  display: flex;
  align-items: center;
  height: 76px;
  padding: 16px;
  font-size: 16px;
  color: #333;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 1px 2px 0 rgba(51,51,51,.2);
`;

export const ProjectH3Wrap = styled.h3`
  position: absolute;
  left: 40px;
  bottom: 12px;
  width: 250px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  color: #fff;
  background-color: rgba(51,51,51,.5);
  border-radius: 100px;
`;
