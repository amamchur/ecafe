import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {HashRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua'
  })
  .then(()=>{
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      document.getElementById('root')
    );
  }, ()=>{
    ReactDOM.render(
      <div>Oops... Localization load failed. Please try again.</div>,
      document.getElementById('root')
    );
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
