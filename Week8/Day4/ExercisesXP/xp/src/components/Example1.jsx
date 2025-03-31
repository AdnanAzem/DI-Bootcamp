import { useState, useEffect } from "react";
import { Link } from "react-router";
import data from '../ex3.json'

const Example1 = () => {
    const [post, setPost] = useState([])


useEffect(()=>{
  setPost(data)
}, [])

return (
    <>
        <h2>Social Medias</h2>
        <ul>
        {post.SocialMedias && post.SocialMedias.map((media) => (
                <>
                <li>
                    <a href={media}>{media}</a>
                </li>
                </>
            
        ))}
        </ul>
    </>
    )
}

export default Example1;