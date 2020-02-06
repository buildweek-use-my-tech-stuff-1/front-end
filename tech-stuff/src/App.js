import React from 'react';
import SellerDashBoard from './Components/SellerDashboard';
import { Route } from 'react-router-dom';
import AccountCreation from './Components/AccountCreation';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Cards from './Components/Cards';
import NavbarTing from './Components/NavbarTing';
import GuestDashboard from './Components/GuestDashboard';

const App = () => {
  return (
    <div>
      <NavbarTing />
      <Route exact path='/' component={AccountCreation} />
      <Route exact path='/login' component={Login} />
      <PrivateRoute path='/seller-dashboard/:id' component={SellerDashBoard} />
      <Route path='/tech/:id' component={Cards} />
      <Route path='/tech' component={GuestDashboard} />
    </div>
  );
};

export default App;
