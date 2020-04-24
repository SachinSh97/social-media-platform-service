let db = {
  users: [
    {
      userId: "JIZUYjbMG2MwcnGD74uP8LpPaSj2",
      email: "user@email.com",
      createdAt: "2020-04-23T05:17:55.504Z",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/social-media-a8682.appspot.com/o/14171310543.jpg?alt=media",
      bio: "Hello ,my name is user,nice to meet you",
      website: "https//user.com",
      llocation: "London,UK",
    },
  ],

  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-04-22T15:58:41.370Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "sachin",
      screamId: "",
      body: "",
      createdAt: "",
    },
  ],
};
const userDetails = {
  //redux data
  credentials: {
    userId: "8WWMOnUiG8ZK7PH4KoeXxTdJQ183",
    email: "sachin@email.com",
    handle: "sachin",
    createdAt: "2020-04-23T10:57:04.015Z",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/social-media-a8682.appspot.com/o/14171310543.jpg?alt=media",
    bio: "Hello im sachin,Please to meet you",
    website: "sachin@email.com",
    location: "delhi,INDIA",
  },
  likes: [
    {
      userHandle: "sachin",
      screamId: "",
    },
    {
      userHandle: "sachin",
      screamId: "",
    },
  ],
};
