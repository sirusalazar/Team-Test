import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'react-md';

const ProductListItem = ({
  name,
  photo,
  description,
  categories,
  brand,
  price,
  stock,
}) => {
  const subtitle = `${categories.join(', ')} - ${brand}`;
  return (
    <Card className="cards__example">
      <CardTitle title={name} subtitle={subtitle} />
      <CardText>
        <div className="product-details">
          <div className="product-photo">
            <img src={photo} alt="Nature from lorempixel" />
          </div>
          <div className="product-meta">
            <p>{description}</p>
            <div className="product-meta-pricing">
              <div>
                <strong>Stock</strong>
                {stock}
              </div>
              <div>
                <strong>Price</strong>
                {price}
              </div>
            </div>
          </div>
        </div>
      </CardText>
    </Card>
  );
};

ProductListItem.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.string),
  brand: PropTypes.string,
  price: PropTypes.string,
  stock: PropTypes.number,
};

ProductListItem.defaultProps = {
  name: '',
  photo: '',
  description: '',
  categories: [],
  brand: '',
  price: '',
  stock: '',
};

export default ProductListItem;
