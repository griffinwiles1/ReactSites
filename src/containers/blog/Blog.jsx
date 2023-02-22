import React from 'react';
import './blog.css';
import {blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Article } from '../../components/';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-header'>
        <h1 className='gradient__text'>A lot is happening,
        We are blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={ blog01 } date="Sep 26, 2021" title="GPT-3 and Open AI is the best. Give us more money pls."/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={ blog05 } date="Sep 26, 2021" title="GPT-3 and Open AI is the best. Give us more money pls."/>
          <Article imgUrl={ blog02 } date="Sep 26, 2021" title="GPT-3 and Open AI is the best. Give us more money pls."/>
          <Article imgUrl={ blog03 } date="Sep 26, 2021" title="GPT-3 and Open AI is the best. Give us more money pls."/>
          <Article imgUrl={ blog04 } date="Sep 26, 2021" title="GPT-3 and Open AI is the best. Give us more money pls."/>
        </div>
      </div>
    </div>
  )
}

export default Blog