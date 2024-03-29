import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from 'react-md';

const ProductHeader = ({
  onChangeViewMode,
  onSearch,
  filteredProducts,
  totalProducts,
}) => (
  <div className="products-header">
    <div className="products-header-buttons">
      <Button flat iconChildren="list" onClick={onChangeViewMode}>
        List
      </Button>
      <Button flat iconChildren="view_module" onClick={onChangeViewMode}>
        Grid
      </Button>
      <div className="products-header-labels">
        <span>
          Showing:
          <strong>{` ${filteredProducts} - `}</strong>
          Hidden:
          <strong>{` ${totalProducts - filteredProducts} `}</strong>
        </span>
      </div>
    </div>
    <div className="products-header-search">
      <TextField
        id="text-with-close-button"
        label="Search..."
        onChange={onSearch}
      />
    </div>
  </div>
);

ProductHeader.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onChangeViewMode: PropTypes.func.isRequired,
  filteredProducts: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};
export default ProductHeader;
