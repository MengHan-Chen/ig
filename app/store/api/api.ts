import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL= process.env.NODE_ENV === "development"
// ? "http://localhost:3000/api/"
// : "https://ig-practice-project.vercel.app/api/";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://ig-practice-project.vercel.app/api/";

type IGStory={
    id:number;
    name:string;
    avatar:string;
}

type IGPost={
    id:number;
    account:string;
    avatar:string;
    photo:string;
    likes:number;
    description:string;
    hashTags:string;
    createTime:string;
}

type IGPostComment={
    id:number;
    account:string;
    comment:string
}


export const homeApi= createApi({
    reducerPath:"homeApi",
    baseQuery: fetchBaseQuery({baseUrl:BASE_URL}),
    // baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3001/"}),
    endpoints:(builder)=>({
        getIGStories:builder.query<IGStory[], number | "all">({
            query:(id)=>{
                if(id!=="all"){
                return `story/${id}`;
            }
            return "stories"},
        }),
        getIGPosts:builder.query<IGPost[], number | "all">({
            query:(id)=>{
                if(id!=="all"){
                return `posts/${id}`;
            }
            return "posts"},
        }),
        getIGPostComment: builder.query<IGPostComment[], number | "all">({
            query: (postId) => (postId !== "all" ? `posts/${postId}` : "posts"),
            transformResponse: (response: { comments: IGPostComment[] }) => {
                console.log("Transform Response:", response);
                return response.comments
            } // 只回傳 comments 陣列
        })
    }),
});

export const { useGetIGStoriesQuery, useGetIGPostsQuery, useGetIGPostCommentQuery } = homeApi;
// export const { useGetIGStoriesQuery, useGetIGPostsQuery } = homeApi;
