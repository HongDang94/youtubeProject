import { useEffect, useState } from 'react';
import YoutubeItem from './YoutubeItem';

const items = [
  {
    "id": "1ui",
    "snippet": {
      "title": "ReactJS là gì? Tại sao nên học ReactJS?",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/hqdefault.jpg",
          "width": 480,
          "height": 360
        },
        "standard": {
          "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/sddefault.jpg",
          "width": 640,
          "height": 480
        },
        "maxres": {
          "url": "https://i.ytimg.com/vi/x0fSBAgBrOQ/maxresdefault.jpg",
          "width": 1280,
          "height": 720
        }
      },
    },
  },
  {
    "id": "1UExfLVZmSmFqWmowVVhqbEtmQndGWDczdXNCeXczUGg5US41MzJCQjBCNDIyRkJDN0VDui",
    "snippet": {
      "title": "SPA/MPA là gì?",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/30sMCciFIAM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/30sMCciFIAM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/30sMCciFIAM/hqdefault.jpg",
          "width": 480,
          "height": 360
        },
        "standard": {
          "url": "https://i.ytimg.com/vi/30sMCciFIAM/sddefault.jpg",
          "width": 640,
          "height": 480
        },
        "maxres": {
          "url": "https://i.ytimg.com/vi/30sMCciFIAM/maxresdefault.jpg",
          "width": 1280,
          "height": 720
        }
      },
    },
  }
]

function YoutubeList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<{
    id: string;
    thumbnails: {
      default: string;
      high: string;
      maxres: string;
      medium: string;
      standard: string;
    },
    title: string;
  }[]>([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  // const YOUTUBE_PLAYLIST_ITEMS_API = "https://www.googleapis.com/youtube/v3/playlistItems";
  // const YOUTUBE_API = `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&key=AIzaSyAu98HTMZj3bKE4K6YpZ9Q2hN_C8WMn4DY`

  useEffect(() => {
    fetch("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL_-VfJajZj0UXjlKfBwFX73usByw3Ph9Q&key=AIzaSyAu98HTMZj3bKE4K6YpZ9Q2hN_C8WMn4DY")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          //return ra mảng
          setItems(result.items.map((i:any)=>{
            return({
              id: i.snippet.id,
              thumbnails: {
                default: i.snippet.thumbnails.default.url,
                // high: string;
                // maxres: string;
                // medium: string;
                // standard: string;
              },
              title: i.snippet.title,
            })
          }));
          console.log(result.items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        
      )
  }, [])

  if (error) {
    return <div>Error: loi call api</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
    {items.map((item) => {
      return <YoutubeItem key={item.id} id={item.id} title={item.title} imgUrl={item.thumbnails.default} />
    })}
    
  </div>
    );
  }
}
export default YoutubeList;