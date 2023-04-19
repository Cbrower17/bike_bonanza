import React from 'react'
import { useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'




export async function getServerSideProps() {
    const trailsRes = await fetch('http://127.0.0.1:5555/trails?limit=10');
    const trailsData = await trailsRes.text();
    // console.log('Trails Response:', trailsData);
    const trails = JSON.parse(trailsData)
  
  
    return {
          props: {
            trails,
            // users
          },
        }
      }

export default function index({trails}){
    const router = useRouter();
    if (router.isFallback) {
        return <div>loading</div>
    }   
    return (
    <div>
        <ul>
            {trails.map((trail) => (
              <li key={trail.id}>
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={trail.thumbnail} alt="Trail Thumbnail" /></figure>
                <div className="card-body">
                 <h2 className="card-title">
                 {trail.name}
                    <div className="badge badge-secondary">Votes</div>
                    </h2>
                <p>{trail.city}</p>
                <div className="card-actions justify-end">
            <div className="badge badge-outline">Ridden</div>
            <div className="badge badge-outline">Wishlist</div>
            </div>
            </div>
            </div>
                {/* <Link href={{ pathname: '/trails', query: { trailId: trail.id } }}> */}
                
                <br />
                
                <br />
                {trail.thumbnail}
                <br />

                {/* wanting to display name city, thumbnail */}
              {/* </Link> */}
              </li>  
            ))}
        </ul>
    </div>
    )
}
 






