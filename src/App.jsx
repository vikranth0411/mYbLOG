import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import PostPage from './pages/PostPage';
import './App.css';

// Dummy post data
export const posts = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    content: 'This is the full content of the first post.',
    author: 'Admin',
    date: 'July 30, 2025',
  },
  {
    id: '2',
    title: 'Why React is Awesome',
    content: 'This is a deeper explanation of React features and benefits.',
    author: 'John Doe',
    date: 'July 29, 2025',
  },
  {
    id: '3',
    title: 'Getting Started with Web Dev',
    content: 'Let’s explore how to build websites from scratch using HTML, CSS, JS...',
    author: 'Jane Smith',
    date: 'July 28, 2025',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className="blog-container">
        <Routes>
          <Route
            path="/"
            element={
              posts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))
            }
          />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
