
import { useParams } from "react-router-dom"
import { useGetPostsQuery } from "./postSlice";
import { Link } from "react-router-dom";
import './Posts.css'


export default function PostDetials() {
    const { id } = useParams();
    const { data: posts } = useGetPostsQuery();

    const post = posts?.find((post) => post._id === id);

    if (!post) {
        return <p>Post Not Found!!</p>
    }

    return (
        <div className="details-card">
            <Link className="Link-Home" to={`/posts/`}>Back to Home</Link>
            <h2>{post.title}</h2>
            <p><b>Description:</b> {post.description}</p>
            <p><b>Price:</b> {post.price}</p>
            <p><b>Location:</b> {post.location}</p>
            <p><b>Author:</b> {post.author.username}</p>
            <p><b>Will Deliver:</b> {post.willDeliver ? "Yes"  : "No"}</p>
        </div>
    )
}