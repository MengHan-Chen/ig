const stories= [
    {
      id: 1,
      name: "account_amy",
      avatar: "/images/avatars/a1.jpg"
    },
    {
      id: 10,
      name: "oren",
      avatar: "/images/avatars/a10.jpg"
    },
    {
      id: 9,
      name: "n_nelson",
      avatar: "/images/avatars/a9.jpg"
    },
    {
      id: 5,
      name: "brunch_collector",
      avatar: "/images/avatars/a5.jpg"
    },
    {
      id: 2,
      name: "helloBecky",
      avatar: "/images/avatars/a2.jpg"
    },
    {
      id: 6,
      name: "helloBecky",
      avatar: "/images/avatars/a6.jpg"
    },
    {
      id: 3,
      name: "c_photo",
      avatar: "/images/avatars/a3.jpg"
    }
]

export async function GET(req:Request){
  return new Response(JSON.stringify(stories),{
      status:200,
      headers:{ "Content-Type": "application/json" }
  })
}