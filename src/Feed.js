import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { articles } from './articles';

const ArticleFeed = () => {
  const styleobj = 
  {overflowY: 'scroll',width:'40vw',position: 'absolute',
  top:'0',
  bottom: '0',
  left: '0',
  right:'0',
  margin: '100px 0px 0px 400px'};

  return (
    <div>
        <Navbar/>
        <div style={styleobj}>
        {articles.map(article => (
        <div key={article.id}>
          <div class="card text-dark border-light mb-3">
            <div class="card-body">
            <h4 class="card-title">{article.title}</h4>
            <img src={article.src} class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180">
            </img>
            <p class="card-text">{article.content}</p>
            <a href={article.link} class="card-link">Click here for full story</a>
            </div>
        </div><br></br>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ArticleFeed;
