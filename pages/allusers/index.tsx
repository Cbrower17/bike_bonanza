import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getServerSideProps({currUser}) {
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
    <div>
        <ul className = "items-center">
            {users.map((user)=> (
                <li key = {user.id} className="pb-10">
                    <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                     <img src={user.profile_picture} alt="Cute Pic" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                     <h2 className="card-title">{user.name}</h2>
                    <p></p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy No</button> */}
                    </div>
                </div>
                </div>
                </li>
            ))}
        </ul>

    </div>
  )
}





// import React from 'react'

// export default function index() {
//   return (
//     <div>index</div>
//   )
// }
