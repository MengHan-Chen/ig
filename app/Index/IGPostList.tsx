"use client";
import React, { useState, useEffect } from "react";
import { IGPost } from "../components/IGPost/IGPost";
import { Loading } from "../components/Loading"
import { useGetIGPostsQuery } from "../store/api/api"


export const IGPostList:React.FC=()=>{
    
    const {data, isLoading} = useGetIGPostsQuery("all");
    

    return(<>
        <div className="space-y-6">
            {isLoading && (
                <div className="w-full flex justify-center mt-20">
                    <Loading/>
                </div>
            )}
            {!isLoading &&
            data?.map((item)=>{
                const {id,account,avatar,photo,likes,description,hashTags,createTime} = item;
                return(
                    <IGPost 
                    key={id}
                    id={id}
                    account={account}
                    avatar={avatar}
                    photo={photo}
                    likes={likes}
                    description={description}
                    hashTags={hashTags}
                    createTime={createTime}
                    />
                )
            })}
            
        </div>        
    </>)
}