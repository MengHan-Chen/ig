type ItemProps={
    name:string;
    avatar:string;
}

export const Item:React.FC<ItemProps>=({name, avatar})=>{
    return<>
        <div className="text-center">
            <div className="w-[56px] h-[56px] p-[3px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden"
                 style={{
                    backgroundImage:`url(${avatar})`,
                    backgroundPosition:"center",
                    backgroundSize:"cover",
                 }}
            ></div>
            <p className="text-xs mt-1">{name}</p>
        </div>
    </>
}