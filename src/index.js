import Post from '@models/Post';
// import Config from './assets/config';
import * as $ from 'jquery';
import Baby from '@/assets/baby.jpg';
import './styles/styles.css';
// import xml from './assets/data.xml';

const post = new Post('Webpack post title', Baby);

$('pre').html(post.toString())

/*
console.log('Post to String', post.toString());
console.log('JSON', Config);
console.log('XML', xml);
*/
