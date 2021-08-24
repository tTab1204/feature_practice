import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import DragAndDropPage from './pages/DragAndDropPage/DragAndDropPage';
import PaginationPage from './pages/PaginationPage/PaginationPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { ROUTES } from './utils/routes';

const App = () => {
  return (
    <div>
      <Route exact path={ROUTES.MAIN} component={AdminPage} />
      <Route path={ROUTES.PAGINATION} component={PaginationPage} />
      <Route path={ROUTES.REGISTER} component={RegisterPage} />
      <Route path={ROUTES.DRAGANDDROP} component={DragAndDropPage} />
    </div>
  );
};

export default App;
