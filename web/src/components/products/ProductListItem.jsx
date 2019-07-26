import React from 'react';
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

export default ProductListItem;
