import React from 'react';
interface IYoutubeItemProps {
  id: number,
  name: string,
  imgUrl: string,
  author: string,
}

function YoutubeItem({id, name, imgUrl, author} : IYoutubeItemProps) {
  return (
    <div className='product-item' style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
      <img src={imgUrl} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>{author}</p>
      </div>
    </div>
  );
}

export default YoutubeItem;