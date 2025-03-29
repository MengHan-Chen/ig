import { IGPostContent } from './IGPostContent';
import { IGUser } from '../IGUser'
import IGPostComments from './IGPostComments';


type PostProps={
    id:number;
    account:string;
    avatar:string;
    photo:string;
    likes:number;
    description:string;
    hashTags:string;
    createTime:string;
}


export const IGPost:React.FC<PostProps>=({
    id,account,avatar,photo,likes,description,hashTags,createTime
    })=>{
    return(
        <div className='space-y-[10px]'>
            <IGUser account={account} avatar={avatar}/>
            <div className='w-100 h-[450px] overflow-hidden'>
                <img src={photo} className='block w-full h-full object-cover'/>
            </div>
            <IGPostContent 
                likes={likes} 
                description={description}
                hashTags={hashTags}
                createTime={createTime}
                account={account}
            />
            <IGPostComments commentId={id}/>
        </div>
    )
}