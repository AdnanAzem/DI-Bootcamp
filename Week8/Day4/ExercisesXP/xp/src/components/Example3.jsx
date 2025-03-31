import { useState, useEffect } from "react";
import data from '../ex3.json'

const Example3 = () => {
    const [post, setPost] = useState({})


useEffect(()=>{
  setPost(data)
}, [])

return (
    <>
        <h2>Experiences</h2>
        {post.Experiences && post.Experiences.map((exp, index) => (
            <div key={index}>
                <img src={exp.logo} alt={`${exp.companyName} logo`} />
                <h5>{exp.companyName}</h5>
                {exp.roles.map((exprole, idx) => (
                    <div key={idx}>
                        <h6 style={{ fontWeight: 'bold' }}>{exprole.title}</h6>
                        <p>{exprole.startDate} - {exprole.endDate}, {exprole.location}</p>
                        <p>{exprole.description}</p>
                    </div>
                ))}
            </div>
        ))}
    </>
);
}

export default Example3;