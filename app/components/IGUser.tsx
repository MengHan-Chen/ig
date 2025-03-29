import { useAppDispatch } from "../store/hooks"
import { follow,unFollow } from "../store/slices/FriendSlice"
import { memo } from "react"

type UserProps={
    id?:number;
    account?:string;
    avatar?:string;
    size?:'medium'|'small';
    showFollow?:boolean;
    isFollowing?:boolean;
}

export const IGUser:React.FC<UserProps>=({
        id,
        account,
        avatar,
        size='medium',
        showFollow=false,
        isFollowing=false,
    })=>
    {
    const dispatch = useAppDispatch();

    function followClickHandler(){
        if (id == undefined) return;
        if (isFollowing){
            dispatch(unFollow(id))
        }else{
            dispatch(follow(id))
        }
    }

    return(
        // items-center mb-[10px]
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <div className={`${size==='small'? "w-[30px] h-[30px]" : "w-[40px] h-[40px]"} rounded-full overflow-hidden`}
                    style={{
                        backgroundImage:`url(${avatar})`,
                        backgroundPosition:'center',
                        backgroundSize:'cover'
                    }}
                ></div>
                <div className="ml-[10px]">{account}</div>
            </div>
            {showFollow && (
                <p className={`${isFollowing? 'text-gray-700 bg-gray-200':'text-white bg-gradient-to-b from-blue-500 to-indigo-400 '} text-center min-w-[120px] text-sm font-bold px-[20px] h-[30px] leading-[30px] rounded-md cursor-pointer`} onClick={followClickHandler}>
                    {isFollowing? 'Following':'Follow'}
                </p>
            )}
        </div>
    )
}