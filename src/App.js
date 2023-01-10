import './App.css';
import PostItem from './components/post';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const App = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const data = await getPosts()
          setPosts(data)
      } catch (e) {

      } finally {
        setIsLoading(false)
      }
    })()
  }, []);

  // getPosts().then(data => setPosts(data)); 
  // getPosts().then(setPosts);

  const getPosts = async (id) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
  }

  if (isLoading) {
    return (
      <div>
        loading...
      </div>
    )
  }

  if (!posts.length) {
    return (
      <div>
        no data
      </div>
    )
  }


  return (
    <div>
      {posts.map((item, idx) => {
        return (
          <Link key={idx} to={`/posts/${item.id}`}>
            <PostItem title={item.title} />
          </Link>
        )
      })}
      {/* {posts.map((item) => (<PostItem key = {idx} title = {item.title} />))}  */}
    </div>
  );
}

export default App;
