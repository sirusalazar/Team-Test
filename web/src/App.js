import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import {
 ClientsPage, ContactPage, HomePage, ProductsPage 
} from './pages';
import { HeaderNavigation } from './components/common';

import './App.css';

const App = () => {
  const [drawerVisible, updateMenuVisibility] = useState(false);
  const [headerTitle, updateTitle] = useState('');
  const [navTitle, setNavTitle] = useState('');
  const functions = { updateTitle, updateMenuVisibility, setNavTitle };
  return (
    <NavigationDrawer
      drawerTitle={navTitle}
      toolbarTitle={headerTitle}
      toolbarActions={HeaderNavigation}
      visible={drawerVisible}
    >
      <Switch>
        <Route exact path="/" render={() => <HomePage {...functions} />} />
        <Route
          path="/products"
          render={() => <ProductsPage {...functions} />}
        />
        <Route
          path="/products/:category"
          exact
          render={() => <ProductsPage {...functions} />}
        />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/clients" component={ClientsPage} />
      </Switch>
    </NavigationDrawer>
  );
};

export default App;
