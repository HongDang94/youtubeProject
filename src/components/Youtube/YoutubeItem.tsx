import React from 'react';
interface IYoutubeItemProps {
  id: string,
  title: string
  imgUrl: string,
}

function YoutubeItem({id, title, imgUrl} : IYoutubeItemProps) {
  return (
    <a href="#" className='product-item' style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
      <img src={imgUrl} alt='' />
      <div>
        <strong>{title}</strong>
      </div>
    </a>
  );
}

export default YoutubeItem;