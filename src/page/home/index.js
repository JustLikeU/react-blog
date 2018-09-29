import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from './store';

import {
  MainWrap,
  ContentWrap,
  ListWrap,
  ItemWrap,
  ImageWrap,
  H2Wrap,
  ArticleH3Wrap,
  ProjectH3Wrap,
} from './style';

import Banner from '../../common/banner';

class Home extends Component {
  render() {
    const { articleList, projectList } = this.props;
    console.log(this)
    return (
      <section className='page page-section'>
        <Banner></Banner>
        <MainWrap>
          <ContentWrap>
            <H2Wrap>文章</H2Wrap>
            <ListWrap>
              {
                articleList.map((item) => {
                  return (
                    <ItemWrap key={item.get('_id')}>
                      <Link to='/11'>
                        <ImageWrap imgUrl={`//xiongwengang.xyz${item.get('cover')}`}></ImageWrap>
                        <ArticleH3Wrap>{ item.get('title') }</ArticleH3Wrap>
                      </Link>
                    </ItemWrap>
                  )
                })
              }
            </ListWrap>
          </ContentWrap>
          <ContentWrap>
            <H2Wrap>项目</H2Wrap>
            <ListWrap>
              {
                projectList.slice(0, 3).map((item) => {
                  return (
                    <ItemWrap project key={item.get('_id')}>
                      <Link to='/11'>
                        <ImageWrap project imgUrl={`//xiongwengang.xyz${item.get('cover')}`}></ImageWrap>
                        <ProjectH3Wrap>{ item.get('name') }</ProjectH3Wrap>
                      </Link>
                    </ItemWrap>
                  )
                })
              }
            </ListWrap>
          </ContentWrap>
        </MainWrap>
      </section>
    );
  }
  componentDidMount() {
    this.props.getHomeData();
  }
};

const mapStateToProps = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  projectList: state.getIn(['home', 'projectList']),
});

const mapDispatchToProps = (dispatch) => ({
  getHomeData() {
    dispatch(actions.getHomeData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
