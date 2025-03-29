import { useState } from "react";
import { HeartIcon } from "../Icons/Icons";
import { log } from "node:console";


type PostCommentProps={
    likes:number;
    description:string;
    hashTags:string;
    createTime:string;
    account:string;
    
}

export const IGPostContent:React.FC<PostCommentProps>=({
    likes,description,hashTags,createTime,account
    // ,comments
    })=>{
        
       
    // const [newLikes,setNewLikes]=useState(likes)
    // let clickValue=1;

    // const likesToggleHandler =()=>{
    //     setNewLikes((likes)=>likes+=clickValue);
    //     clickValue
    // }

    console.log('likes',likes);
    
    return(
        <div>
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <HeartIcon/>
                    <p className="ml-[5px]">
                        <span data-likes="likesNum">{likes}</span> 
                        {likes > 1 ? ' likes':' like'}</p>
                </div>
                <div className="text-gray-500 italic">{createTime}</div>
            </div>
            
            <div className="py-2">{description}</div>
            <div className="text-gray-500 text-sm">{hashTags}</div>
            
        </div>
    )
}