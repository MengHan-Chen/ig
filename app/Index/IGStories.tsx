"use client";
import { useGetIGStoriesQuery } from "../store/api/api"
import { Item } from "./Item";
import { Loading } from "../components/Loading"

export const IGStories:React.FC=()=>{
    const {data, isLoading} = useGetIGStoriesQuery("all");
    
    return(<>
        <div className="w-full h-[110px] px-[10px] space-x-[5px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar mb-[20px] lg:mb-[40px] no-scrollbar">
            {isLoading && (
                <div className="flex justify-center w-full">
                    <Loading/>
                </div>
            )}
            {!isLoading && 
             data?.map((item)=>{
                const { id, name, avatar }= item;
                return <Item key={id} name={name} avatar={avatar}/>
             })
            }
        </div>
    </>)
}