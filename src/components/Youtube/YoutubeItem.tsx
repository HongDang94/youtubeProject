import React from 'react';

interface IYoutubeItemProps {
  product: IProduct;
}

function YoutubeItem({product} : IYoutubeItemProps) {
  return (
    <div className='product-item'>
      <img src={product.imgUrl} alt={product.name} />
      <strong>{product.name}</strong>
      <p>{product.author}</p>
    </div>
  );
}

export default YoutubeItem;