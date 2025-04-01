const blogs = [
    {
        "id": "1",
        "author": "Mark",
        "content": "blog 1 content is here"
    },
    {
        "id": "2",
        "author": "Mohamed",
        "content": "blog 2 content is here"
    },
    {
        "id": "3",
        "author": "Amine",
        "content": "blog 3 content is here"  
    }
]

export async function GET(req:Request, context:any) {
    const { params } = context;
    const blog = blogs.filter((blog)=>blog.id === params.id.toString())
    
   if(blog.length === 0 ) return  new Response(JSON.stringify({error: "Blog not found !"}),{
        status:404,
        headers:{ "Content-Type": "application/json" }
    })

    return new Response(JSON.stringify(blog),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}