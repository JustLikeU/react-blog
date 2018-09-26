import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

// 页面
import Home from './page/home';
import ArticleList from './page/article/list';
import ArticleDetail from './page/article/detail';
import Project from './page/project';
import Resume from './page/resume';

// 组件
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='router-wrap'>
            <Header></Header>
            <div className='page-main'>
              <Route path='/' exact component={Home}></Route>
              <Route path='/article-list/:type' exact component={ArticleList}></Route>
              <Route path='/article-detail/:id' exact component={ArticleDetail}></Route>
              <Route path='/project' exact component={Project}></Route>
              <Route path='/resume' exact component={Resume}></Route>
            </div>
          </div>
      	</BrowserRouter>
      </Provider>
    );
  }
}

export default App;
