
"use client";
import { PageContainer } from "../components/PageContainer"
import { Header } from "../components/Header"
import { IGUser } from "../components/IGUser"

import { useAppSelector } from "../store/hooks"

const PageFollowers:React.FC=()=>{
    const friendReducer = useAppSelector((state)=> state.friendReducer)
    const friends = friendReducer.friends;

    return<>
        <Header />
        <PageContainer>
            <p className="my-8 font-bold text-2xl box-border ">Following</p>
            <div className="p-[20px] w-full shadow-lg h-fit space-y-[10px]">
                {friends.map((item)=>{
                    const {id,account,avatar,isFollowing}=item;
                    return(
                        <IGUser 
                            key={id}
                            id={id}
                            account={account}
                            avatar={avatar}
                            isFollowing={isFollowing}
                            showFollow
                        />
                    );
                })}

            </div>
        </PageContainer>
    </>
}

export default PageFollowers