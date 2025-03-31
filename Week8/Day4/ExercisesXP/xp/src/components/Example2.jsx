import { useState, useEffect } from "react";
import { Link } from "react-router";
import data from '../ex3.json'

const Example2 = () => {
    const [post, setPost] = useState({})


useEffect(()=>{
  setPost(data)
}, [])

return (
    <>
        <h2>Skills</h2>
        {post.Skills && post.Skills.map((skill, index) => (
            <div key={index}>
            <h3>{skill.Area}</h3>
        <ul>
            {skill.SkillSet.map((skillname, idx) => (
                    <li key={idx}>
                        <h6>{skillname.Name}</h6>
                    </li>       
        ))}
        </ul>
        </div>
        ))}
    </>
    )
}

export default Example2;