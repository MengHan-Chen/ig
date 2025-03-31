const data = {
  posts: [
    {
      id: 1,
      account: "account_amy",
      avatar: "/images/avatars/a1.jpg",
      photo: "/images/posts/main1.jpg",
      likes: 1,
      description: "The cherry blossoms are in full bloom!",
      hashTags: "#japan",
      createTime: "1 hours ago"
    },
    {
      id: 2,
      account: "helloBecky",
      avatar: "/images/avatars/a2.jpg",
      photo: "/images/posts/main2.jpg",
      likes: 24,
      description: "Nice day",
      hashTags: "#ocean",
      createTime: "1 day ago"
    },
    {
      id: 3,
      account: "c_photo",
      avatar: "/images/avatars/a3.jpg",
      photo: "/images/posts/main3.jpg",
      likes: 50,
      description: "My little Princess🥰",
      hashTags: "#cat",
      createTime: "1 day ago"
    },
    {
      id: 4,
      account: "dian000_0",
      avatar: "/images/avatars/a4.jpg",
      photo: "/images/posts/main4.jpg",
      likes: 2,
      description: "Everything is perfect",
      hashTags: "#traveling",
      createTime: "2025.03.14"
    },
    {
      id: 5,
      account: "brunch_collector",
      avatar: "/images/avatars/a5.jpg",
      photo: "/images/posts/main5.jpg",
      likes: 100,
      description: "New Menu starts TODAY!",
      hashTags: "#brunch",
      createTime: "2025.03.12"
    },
    {
      id: 6,
      account: "hugh_photo",
      avatar: "/images/avatars/a6.jpg",
      photo: "/images/posts/main6.jpg",
      likes: 36,
      description: "Testing new camera",
      hashTags: "#photo",
      createTime: "2025.03.10"
    },
    {
      id: 7,
      account: "jason_99",
      avatar: "/images/avatars/a7.jpg",
      photo: "/images/posts/main7.jpg",
      likes: 5,
      description: "Temple",
      hashTags: "#japan",
      createTime: "2025.02.20"
    },
    {
      id: 8,
      account: "mars_life",
      avatar: "/images/avatars/a8.jpg",
      photo: "/images/posts/main8.jpg",
      likes: 36,
      description: "Start my work",
      hashTags: "#plant",
      createTime: "2025.02.15"
    },
    {
      id: 9,
      account: "n_nelson",
      avatar: "/images/avatars/a9.jpg",
      photo: "/images/posts/main9.jpg",
      likes: 36,
      description: "The meeting went well",
      hashTags: "#businessTrip",
      createTime: "2025.02.01"
    },
    {
      id: 10,
      account: "oren",
      avatar: "/images/avatars/a10.jpg",
      photo: "/images/posts/main10.jpg",
      likes: 36,
      description: "Nice to be back here again",
      hashTags: "#childhood",
      createTime: "2025.01.31"
    }
  ],
  stories: [
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
};

export async function GET(req:Request){
  return new Response(JSON.stringify(data),{
      status:200,
      headers:{ "Content-Type": "application/json" }
  })
}