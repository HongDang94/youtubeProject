import { useEffect, useState } from 'react';
import YoutubeItem from './YoutubeItem';

const DefaultListYoutube = [
  {
    id: 1,
    name: "kenh youtube1",
    imgUrl: "https://picsum.photos/168/94",
    author: "dang hong",
  },
  {
    id: 2,
    name: "kenh youtube 2",
    imgUrl: "https://picsum.photos/168/94",
    author: "hong hihi",
  }
]

function YoutubeList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
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
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div>
      {DefaultListYoutube.map((item) => {
        return <YoutubeItem key={item.id} id={item.id} name={item.name} imgUrl={item.imgUrl} 
        author={item.author}/>
      })}
      
    </div>
  );
  }
}

export default YoutubeList;