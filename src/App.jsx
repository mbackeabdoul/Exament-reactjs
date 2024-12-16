import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArticlesList from './composants/ArticlesList';
import UserList from './composants/UserList';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <nav className="mb-8 py-4">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="font-bold text-black-600 hover:text-gray-800">Articles</Link>
            </li>
            <li>
              <Link to="/users" className="font-bold text-black-600 hover:text-gray-800">Utilisateurs</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;