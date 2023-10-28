
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const COHORT = "2309-FSA-ET-WEB-FT-SF";
const API_URL = `https://strangers-things.herokuapp.com/api/${COHORT}`;

export const postsApi = createApi ({
    reducerPath: '/postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),

    endpoints: () => ({}),
});


export default postsApi;