import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo';

import {
  HeaderWrap,
  HeraderInner,
  NavWrap,
} from './style';

const navList = [{
    name: '主页',
    path: '/',
    isOuter: false,
  }, {
    name: '文章',
    // 文章链接 默认展示 文章列表页面 技术文章分类
    path: '/article-list/technical',
    isOuter: false,
  }, {
    name: '项目',
    path: '/project',
    isOuter: false,
  }, {
    name: '简历',
    path: '/resume',
    isOuter: false,
  }, {
    name: '传说后台',
    // 外链地址
    path: 'http://admin.xiongwengang.xyz/#/blog/article',
    isOuter: true,
  },
];

const Header = () => {
  return (
    <HeaderWrap>
      <HeraderInner>
        <Link to='/'>
          <Logo />
        </Link>
        <NavWrap>
          {
            navList.map(item => {
              return (!item.isOuter ?
                <Link
                  className={window.location.pathname === item.path ? 'link active' : 'link'}
                  to={item.path} 
                  key={item.name}>
                  { item.name }
                </Link>
                :
                <a
                  className='link'
                  href={item.path}
                  key={item.name}
                  target='_blank'
                  // 防止新开页面通过window.opener获取源页面的控制权
                  rel='noopener noreferrer'>
                  { item.name }
                </a>
              )
            })
          }
        </NavWrap>
      </HeraderInner>
    </HeaderWrap>
  )
}

export default Header;
