"use client";
import React, { useEffect,useState } from "react";
import { useGetIGPostCommentQuery } from "@/app/store/api/api";
import { Loading } from "../Loading";


type CommentProps={
    id:string;
    account:string;
    comment:string
}

type IGPostCommentsProps = {
    commentId: number;
    // postData:[]
};

const commentsData = [
    {
      id:1,
      comments:[
        {
          id:'a1',
          account:'helloBecky',
          comment:'Nice!😍'
        },
        {
          id:'a2',
          account:'jason_99',
          comment:'Love the photo👍'
        },
      ]
    },
    {
      id:2, 
      comments:[
        { 
          id:'b1',
          account:'n_nelson',
          comment:'The beach I visited in Tasmania last week was simply stunning.'
        },
        {
          id:'b2',
          account:'oren',
          comment:'stunning❤️'
        },
        {
          id:'b3',
          account:'lisaLife',
          comment:'Looks Great!'
        }
      ]
    },{
      id:4, 
      comments:[
        { 
          id:'d1',
          account:'micky',
          comment:'BEAUTIFUL!🥰'
        },
        {
          id:'d2',
          account:'sara',
          comment:'Love the scene'
        }
      ]
    },
    {
      id:3, 
      comments:[
        { 
          id:'c1',
          account:'oren',
          comment:'SHE IS SO BEAUTIFUL!🤩🤩🤩'
        }
      ]
    },
    {
      id:4, 
      comments:[
        { 
          id:'d1',
          account:'micky',
          comment:'BEAUTIFUL!🥰'
        },
        {
          id:'d2',
          account:'sara',
          comment:'Love the scene'
        }
      ]
    },
    {
      id:5, 
      comments:[
        { 
          id:'e1',
          account:'elsa_2015',
          comment:'hungry now 🍴🥞☕'
        }
      ]
    }
]

const IGPostComment:React.FC<CommentProps>=(
    {id,account,comment}
    )=>{
    return(
        <>
            <div key={id} className="flex p-2 bg-gray-100 border-white space-x-2">
                <p className="italic text-gray-500 mr-[5px]">{account}</p>
                <p>{comment}</p>
            </div>
        </>
    )
}



const IGPostComments:React.FC<IGPostCommentsProps>=({ commentId })=>{
    console.log("commentId type:", typeof commentId);
console.log("commentId value:", commentId);


    // const {data, isLoading} = useGetIGPostCommentQuery( postId );
    const postComments = commentsData.find(comment => comment.id === Number(commentId));

    const [inputValue, setInputValue] = useState("");
    const [comments, setComments] = useState<CommentProps[]>([]);

    useEffect(() => {
      setComments(postComments ? postComments.comments : []);
    }, [commentId]); 

    console.log("postComments",postComments);
    console.log("commentId",commentId);

    // submit btn
    const addCommentHandler=()=>{
      if (inputValue.trim() === "") return;

      const newComment = {
        id: `${Date.now()}`, 
        account: "myAccount", 
        comment: inputValue,
      }

      setComments([...comments, newComment]);
      setInputValue("");

      // console.log("inputValue",inputValue);

    }
    
    return(<>
        {
            <div className=" divide-y-2 rounded-md overflow-hidden">

            {comments.length > 0 ? (
              comments.map((comment) => (
                <IGPostComment
                  key={comment.id}
                  id={comment.id}
                  account={comment.account}
                  comment={comment.comment}
                />
              ))
            ) : (
                <p className="p-2 italic text-gray-300 bg-gray-50 center">Leave a comment!</p>
            )}
            
            </div>
        }
        <div className="flex">
            <input data-input="addComment" type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className="block w-full border rounded-md border-gray-300 px-2 placeholder-gray-300 focus:outline-none leading-[35px]" placeholder="Leave a comment" />
            <button data-btn="submit" onClick={addCommentHandler} className="rounded-md leading-[35px] px-2 bg-blue-500 text-white ml-[5px]">Post</button>
        </div>
    </>)
}

export default IGPostComments;