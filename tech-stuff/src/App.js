import React from 'react';
import OwnerDashBoard from './Components/OwnerDashBoard';
import AccountCreation from './Components/AccountCreation';
import Login from './Components/Login';
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';

const App = () => {
  return (
    <>
      <div>
        <Route exact path='/' component={AccountCreation} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/owner-dashboard/:id' component={OwnerDashBoard} />
      </div>
    </>
  );
};

export default App;
