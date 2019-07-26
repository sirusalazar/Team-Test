import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'react-md';
import { bindActionCreators } from 'redux';

import loadProducts from '../actions/productActions';
import ProductList from '../components/products/ProductList';
import ProductHeader from '../components/products/ProductHeader';
import { Loading } from '../components/common';

class ProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: 'Grid', search: '' };
    this.filterProducts = this.filterProducts.bind(this);
    this.changeViewMode = this.changeViewMode.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentWillMount() {
    this.props.loadProducts();
  }

  componentDidMount() {
    this.filterProducts();
  }

  filterProducts() {
    if (this.state.search) {
      return this.filterProductsBySearch();
    }
    return this.filterProductsByCategory();
  }

  filterProductsByCategory() {
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

  filterProductsBySearch() {
    const { search } = this.state;
    return this.props.products.filter((p) => {
      if (JSON.stringify(p).indexOf(search) > -1) {
        return p;
      }
    });
  }

  searchProducts(search) {
    this.setState({ search });
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
          <ProductHeader
            onChangeViewMode={this.changeViewMode}
            filteredProducts={filteredProducts.length}
            totalProducts={this.props.products.length}
            onSearch={this.searchProducts}
          />
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
