import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './style.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const PostPage = () => {
  const { id } = useParams()
  const [posts, setPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true)
        const data = await getPosts(id)
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
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
  }

  if (isLoading) {
    return (
      <Box className={styles.loader} sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  if (!posts) {
    return (
      <div>
        no result
      </div>
    )
  }

  return (
    <div className={styles.main_card}>
      <Card className={styles.card} sx={{ maxWidth: 345 }}>
        <CardContent className={styles.card_content}>
          <Typography className={styles.posts_id} gutterBottom variant="h5" component="div">
            {posts.id}
          </Typography>
          <Typography className={styles.posts_title} gutterBottom variant="h5" component="div">
            {posts.title}
          </Typography>
          <Typography className={styles.posts_body} variant="body2" color="text.secondary">
            {posts.body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

// return (
//   <div>
//     <h2>
//         {posts.title}
//     </h2>
//     <h2>
//         {posts.id}
//     </h2>
//     <p>
//         {posts.body}
//     </p>
//   </div>
// )

export default PostPage