import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from './pages/AdminPage/AdminPage';
import DesignPage from './pages/DesignPage/DesignPage';
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
      <Route path={ROUTES.DESIGN} component={DesignPage} />
    </div>
  );
};

export default App;
