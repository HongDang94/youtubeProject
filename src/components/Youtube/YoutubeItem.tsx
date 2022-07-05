import React from 'react';
interface IYoutubeItemProps {
  id: string,
  title: string
  imgUrl: string,
}

function YoutubeItem({id, title, imgUrl} : IYoutubeItemProps) {
  return (
    <div className='product-item' style={{display: "flex", flexDirection: "row", marginTop: "10px"}}>
      <img src={imgUrl} alt='' />
      <div>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export default YoutubeItem;