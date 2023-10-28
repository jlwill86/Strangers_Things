
import { Link } from 'react-router-dom'
export default function Post({ post }) {

   
    return (
        <li className='post'>
            <h2>{post.title}</h2>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <Link to={`/posts/${post._id}`}>See Details</Link>
        </li>
    )
}
