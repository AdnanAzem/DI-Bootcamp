import { useState, useEffect } from "react";
import { Link } from "react-router";
import data from '../ex2.json'

const PostList = () => {
    const [post, setPost] = useState([])


useEffect(()=>{
  setPost(data)
}, [])

return (
    <>
        <h2>Hi This is a Title </h2>
        {post.map(post=>{
            return(
                <>
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <h6>{post.content}</h6>
                </div>
                </>
            )
        })}
    </>
)
}

export default PostList;