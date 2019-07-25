import React from 'react';
import { Cell } from 'react-md';

import ProductListItem from './ProductListItem';

const ProductList = ({ products, mode }) => {
  const cellSize = mode === 'List' ? 12 : 6;
  return (
    <React.Fragment>
      {products.map(product => (
        <Cell key={product.id} size={cellSize}>
          <ProductListItem {...product} />
        </Cell>
      ))}
    </React.Fragment>
  );
};

export default ProductList;
