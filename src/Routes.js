import React from 'react';
import {Redirect, Switch} from 'react-router-dom';
import {Minimal as MinimalLayout} from './layouts';
import {RouteWithLayout} from './components';

import {ProductList as ProductListView,} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/product"
      />

      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MinimalLayout}
        path="/product"
      />
    </Switch>
  );
};

export default Routes;
