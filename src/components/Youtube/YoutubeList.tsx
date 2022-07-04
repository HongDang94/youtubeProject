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
    author: "qdhhdh",
  }
]

function YoutubeList() {
  return (
    <div>
      {DefaultListYoutube.map((item) => {
        return <YoutubeItem key={item.id} id={item.id} name={item.name} imgUrl={item.imgUrl} 
        author={item.author}/>
      })}
      
    </div>
  );
}

export default YoutubeList;