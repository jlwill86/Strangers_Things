
import { useGetPostsQuery } from "./postSlice";
import Post from "./Post";


export default function Posts() {
    const { data: posts } = useGetPostsQuery();

    return (
        <ul className="posts-List">
        {posts?.map((post) => ( 
        <Post key={post._id} post={post} />
        ))}
        
        </ul>
    )
}