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
  margin: '100px 0px 0px 450px'};

  return (
    <div>
      
        <Navbar/>
        <div style={styleobj}>
        <div class="card text-black mb-3">
        <h4 class="card-header">What's on your mind?</h4> 
        <div class="card-body">
    <p class="card-text">
      <textarea class="form-control"></textarea>
      <button type="submit" className="btn btn-primary" style={{margin:'0.5rem'}}>Post</button>
    </p>
      </div>

        </div>  
        {articles.map(article => (
        <div key={article.id}>
          <div class="card text-dark border-light mb-3">
            <div class="card-body">
            <h4 class="card-title">{article.title}</h4>
            <img src={article.src} class="d-block user-select-none" width="100%" height="300" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180">
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
