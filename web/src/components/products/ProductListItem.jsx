import React from 'react';
import {
 Card, CardTitle, CardText, Media 
} from 'react-md';

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
      <Media>
        <img src={photo} alt="Nature from lorempixel" />
      </Media>
      <CardText>
        <p>{description}</p>
      </CardText>
    </Card>
  );
};

export default ProductListItem;
