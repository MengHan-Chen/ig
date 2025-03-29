import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Friend={
    id:number;
    account:string;
    isFollowing:boolean;
    avatar:string;
}

type friendState={
    friends: Friend[]
}

const initialState:friendState={
    friends:[
        {
            id:1,
            account:"account_amy",
            isFollowing:true,
            avatar:"/images/avatars/a1.jpg"
        },
        {
            id:2,
            account:"helloBecky",
            isFollowing:true,
            avatar:"/images/avatars/a2.jpg"
        },
        {
            id:5,
            account:"brunch_collector",
            isFollowing:true,
            avatar:"/images/avatars/a5.jpg"
        },
        {
            id:6,
            account:"hugh_photo",
            isFollowing:true,
            avatar:"/images/avatars/a6.jpg"
        },
        {
            id:8,
            account:"mandel",
            isFollowing:true,
            avatar:"/images/avatars/a8.jpg"
        },
        {
            id:3,
            account:"c_photo",
            isFollowing:true,
            avatar:"/images/avatars/a3.jpg"
        },
        {
            id:9,
            account:"n_nelson",
            isFollowing:true,
            avatar:"/images/avatars/a9.jpg"
        },
        {
            id:10,
            account:"oren",
            isFollowing:true,
            avatar:"/images/avatars/a10.jpg"
        }
    ]
};

export const friendSlice=createSlice({
    name:"friendList",
    initialState,
    reducers:{
        follow:(state,action:PayloadAction<number>)=>{
            const friends=state.friends;
            for(let i=0;i<friends.length;i++){
                const friend=friends[i]
                if(friend.id ===action.payload){
                    friend.isFollowing = true
                }
            }
        },
        unFollow:(state,action:PayloadAction<number>)=>{
            const friends=state.friends;
            for(let i=0;i<friends.length;i++){
                const friend=friends[i]
                if(friend.id ===action.payload){
                    friend.isFollowing = false
                }
            }
        }
    }
})

export const {follow, unFollow}=friendSlice.actions;
export default friendSlice.reducer;