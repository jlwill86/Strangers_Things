
import { useEffect, useState } from "react"
import Post from "./Post";



export default function Posts() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try{
            const COHORT = "2309-FSA-ET-WEB-FT-SF";
            const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

            const response = await fetch(`${API_URL}/posts`)
            const data = await response.json()
            console.log(data)
            setPosts(data.data.posts)
        } catch(err) {
            console.log(err)
        }
    }
        fetchPosts()
}, [])

    return (
        <ul className="posts-List">
        {posts.map((post) => ( 
        <Post key={post._id} post={post} />
        ))}
        
        </ul>
    )
}