import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps() {
    const usersInfo = await fetch('http://127.0.0.1:5555/users');
    const usersData = await usersInfo.text()
    // console.log('Users Response:', usersData)
    const users = JSON.parse(usersData)

  return {
        props: {
        //   trails,
          users
        },
      }
    }

export default function index({users}) {
    const router = useRouter();
    if (router.isFallback) {
        return <div>loading</div>
    } 
  return (
    <div>index</div>
  )
}





// import React from 'react'

// export default function index() {
//   return (
//     <div>index</div>
//   )
// }
