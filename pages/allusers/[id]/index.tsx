import Link from "next/link";

const ROUTE_POST_ID = "allusers/[id]";
const users = [
  {
    id: 1,
    title: "Post #1"
  },
  {
    id: 2,
    title: "Post #2"
  }
];
export default function Home() {
  return (
    <div>
      <h1>Welcome to my blog</h1>
      {users.map((post) => (
        <div key={`post-${post.id}`}>
          <Link
            href={{
              pathname: ROUTE_POST_ID,
              query: { id: post.id }
            }}
          >
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
// import React from 'react'
// import { useEffect } from 'react';
// import Link from 'next/link'
// import Head from 'next/head'
// import { useRouter } from 'next/router'

// export async function getServerSideProps({currUser}) {
//     const usersInfo = await fetch('http://127.0.0.1:5555/users');
//     const usersData = await usersInfo.text()
//     // console.log('Users Response:', usersData)
//     const users = JSON.parse(usersData)

//   return {
//         props: {
//         //   trails,
//           users
//         },
//       }
//     }

// export default function index({users}) {
//     const router = useRouter();
//     if (router.isFallback) {
//         return <div>loading</div>
//     } 
//   return (
//     <div>
//         i

//     </div>
//   )
// }





// import React from 'react'

// export default function index() {
//   return (
//     <div>index</div>
//   )
// }
