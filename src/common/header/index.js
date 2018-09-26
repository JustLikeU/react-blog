import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';

import {
  HeaderWrap,
  NavWrap,
} from './style';

// 文章链接 默认展示 文章列表页面 技术文章分类

const navList = [{
    name: '主页',
    path: '/',
  }, {
    name: '文章',
    path: '/article-list/technical',
  }, {
    name: '项目',
    path: '/project',
  }, {
    name: '简历',
    path: '/resume',
  }, {
    name: '传说后台',
    path: '/',
  },
];

const Header = (props) => {
  console.log(props)
  return (
    <HeaderWrap>
      <Link to='/'>
        <Logo />
      </Link>
      <NavWrap>
        {
          navList.map(item => {
            return (
              <Link
                className={window.location.pathname === item.path ? 'link active' : 'link'}
                to={item.path} 
                key={item.name}>
                { item.name }
              </Link>
            )
          })
        }
      </NavWrap>
    </HeaderWrap>
  )
}

export default Header;
