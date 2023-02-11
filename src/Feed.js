import React, { useState, useEffect } from 'react';

const ArticleFeed = () => {
  const [articles, setArticles] = useState([{id: 1, title: "Hello", content: "xyz", author: "abc"}, {id: 2, title: "Welcome", content: "gfhjk", author: "def"}]);
  

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
          <p>Written by: {article.author}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleFeed;
