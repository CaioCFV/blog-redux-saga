import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import ShowPosts from './components/ShowPosts';
import SearchPosts from './components/SearchPosts';
import Posts from './components/Posts';
import './app.css';




function App () {   
    
    return (
      <Provider store={store}>
          <header className="main-head">
            <div className="max-container">
              <img src="https://miro.medium.com/max/312/1*kuITW-HAzQSTqp40IcOziQ.png" alt="logo"  className="logo-head"/>
              <h1>Async Function With Redux Saga</h1>
            </div>
          </header>
          <ShowPosts />
          <SearchPosts />
          <Posts />
          <footer className="footer-container">
            <h1 className="title-footer">Criado com</h1>
            <div className="max-container">
                <img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png" alt="footer-logo" className="logo-footer"/>
                <img src="https://redux-saga.js.org/logo/0800/Redux-Saga-Logo-Landscape.png" alt="footer-logo" className="logo-footer"/>
            </div>
          </footer>
      </Provider>
      
    
    )

}

export default App;
