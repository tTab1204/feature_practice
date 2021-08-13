import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import PaginationPage from './pages/PaginationPage/PaginationPage';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={AdminPage}></Route>
      <Route path="/pagination" component={PaginationPage}></Route>
    </div>
  );
};

export default App;
