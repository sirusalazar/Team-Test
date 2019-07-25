import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { NavigationDrawer } from 'react-md';

import {
 ClientsPage, ContactPage, HomePage, ProductsPage 
} from './pages';
import { HeaderNavigation, NavItemLink } from './components/common';
import leftNavigation from './components/products/Categories';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toolbarTitle: '',
    };
  }

  componentWillMount() {
    const { history } = this.props;
    this.unlisten = history.listen((location) => {
      this.setState({
        toolbarTitle: this.getCurrentTitle(location),
      });
    });
  }

  componentDidMount() {
    const { location } = this.props;
    this.setState({ toolbarTitle: this.getCurrentTitle(location) });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getCurrentTitle = (location) => {
    // const { location } = this.props;
    const lastSection = location.pathname.split('/');
    let title = '';
    if (lastSection.length && lastSection.length >= 2) {
      title = lastSection[1];
    }
    if (!title) {
      return 'Home';
    }
    return title;
  };

  handleVisibility = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { toolbarTitle } = this.state;
    return (
      <NavigationDrawer
        drawerTitle="Categories"
        toolbarTitle={toolbarTitle}
        toolbarActions={HeaderNavigation}
        visible={toolbarTitle === 'products'}
        navItems={leftNavigation.map(props => (
          <NavItemLink {...props} key={props.to} />
        ))}
        onVisibilityChange={this.handleVisibility}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" exact component={ProductsPage} />
          <Route path="/products/:category" exact component={ProductsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/clients" component={ClientsPage} />
        </Switch>
      </NavigationDrawer>
    );
  }
}

export default withRouter(App);
