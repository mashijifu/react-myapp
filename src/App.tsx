import React from 'react';
import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Tasks from './pages/Tasks';
import Task from './pages/Task';

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Reactコース</h1>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/"
        >
          Home
        </NavLink>|
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/about"
        >
          About
        </NavLink>|
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/tasks"
        >
          Tasks
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tasks" element={<Tasks />}>
          <Route path="task" element={<Task />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
