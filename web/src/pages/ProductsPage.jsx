import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell, Button } from 'react-md';
import { bindActionCreators } from 'redux';

import loadProducts from '../actions/productActions';
import ProductList from '../components/products/ProductList';
import { Loading } from '../components/common';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'Grid' };
    this.filterProducts = this.filterProducts.bind(this);
    this.changeViewMode = this.changeViewMode.bind(this);
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  filterProducts() {
    const { category } = this.props.match.params;
    if (!category) {
      return this.props.products;
    }
    return this.props.products.filter((p) => {
      if (p.categories.indexOf(category) > -1) {
        return p;
      }
    });
  }

  changeViewMode(evt) {
    this.setState({ mode: evt.target.innerHTML });
  }

  render() {
    const filteredProducts = this.filterProducts();
    const { mode } = this.state;
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <Grid>
        <Cell size={12}>
          <Button flat iconChildren="list" onClick={this.changeViewMode}>
            List
          </Button>
          <Button flat iconChildren="dashboard" onClick={this.changeViewMode}>
            Grid
          </Button>
          <span>
            Showing:
            <strong>{` ${filteredProducts.length} - `}</strong>
            Hidden:
            <strong>
              {` ${this.props.products.length - filteredProducts.length} `}
            </strong>
          </span>
        </Cell>
        <ProductList products={filteredProducts} mode={mode} />
      </Grid>
    );
  }
}

const mapStateToProps = reducers => reducers.productsReducer;

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: bindActionCreators(loadProducts, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsPage);
