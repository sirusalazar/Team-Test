import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as productActions from '../actions/productActions';

import '../App.css';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.actions.loadProducts();
  }

  render() {
    console.log(this.props);
    const { updateTitle, updateMenuVisibility, setNavTitle } = this.props;
    updateTitle('Products Page');
    setNavTitle('Categories');
    updateMenuVisibility(true);
    return <h1>this is products page</h1>;
  }
}

const mapStateToProps = reducers => reducers.productsReducer;

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
