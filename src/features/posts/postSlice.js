// inject a getPosts query to the central API slice

import { postsApi } from "../../store/api";


const postApi = postsApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
                transformResponse: (response) => response.data.posts,
            
        })
    })
})

export const { useGetPostsQuery } = postApi;