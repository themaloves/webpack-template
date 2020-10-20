import Post from '@models/Post';
// import Config from './assets/config';
import * as $ from 'jquery';
import Baby from '@/assets/baby.jpg';
import './babel';
import './styles/styles.css';
import './styles/main.scss';
// import xml from './assets/data.xml';
import React from 'react';
import {render} from 'react-dom';

const post = new Post('Webpack post title', Baby);

$('pre').html(post.toString())

const App = () => (
  <main>
    <div className="container">
      <h1>Webpack Course</h1>
    </div>
    <div className="logo" />

    <pre className="sd" />

    <ul className="box">
      <li className="box__item">Наша</li>
      <li className="box__item">Классная</li>
      <li className="box__item">Команда</li>
    </ul>
  </main>
);

render(<App/>, document.getElementById('app'))

/*
console.log('Post to String', post.toString());
console.log('JSON', Config);
console.log('XML', xml);
*/
