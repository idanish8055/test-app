import React from 'react';
import Header from './components/Header/Header';
import TaskList from './components/Tasks/TaskList';
import Result from './components/Test/Result';
import Test from './components/Test/Test';
import Home from './components/Home/Home';
import AdminDashboard from './components/Admin/AdminDashboard';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/tasks" element={ <TaskList/> } />
        <Route path="/result" element={ <Result/> } />
        <Route path="/test" element={ <Test /> } />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>
    </React.Fragment>
    </Router>
  );
}

export default App;
