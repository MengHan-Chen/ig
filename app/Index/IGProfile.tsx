
"use client"
import { IGUser } from "../components/IGUser"
import { useAppSelector } from "../store/hooks"
import Link from 'next/link';

export const IGProfile:React.FC=()=>{
    const friendReducer = useAppSelector((state)=>state.friendReducer)
    const friends = friendReducer.friends.slice(0,4)
    
    return(
        <div>
            <div>
              <IGUser account="myAccount" avatar="/images/avatars/user1.jpg" size="medium" />
            </div>

            <p className="font-bold text-gray-400 mt-4 ma-4 mb-[20px] text-sm">You are following</p>

            {friends.map((item)=>{
                const { id,account,avatar, isFollowing} = item;
                return (
                    <div className="mb-3" key={id}>
                        <IGUser
                            id={id}
                            account={account}
                            avatar={avatar}
                            isFollowing={isFollowing}
                            showFollow
                        />
                    </div>
                )
            })}
            <Link rel="stylesheet" href="/Followers" className="block p-1 w-full mt-[30px] rounded text-center text-white bg-gradient-to-b from-blue-500 to-indigo-400 font-bold">
              View All
            </Link>
        </div>
    )
}