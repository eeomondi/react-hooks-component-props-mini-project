// src/components/App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from '../data/blog';

function App() {
  const { name, about, image, posts } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      <ArticleList articles={posts} />
    </div>
  );
}

export default App;
