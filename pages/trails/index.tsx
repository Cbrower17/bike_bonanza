// import React from 'react'
// import { useEffect } from 'react';
// import Link from 'next/link'
// import Head from 'next/head'
// import { useRouter } from 'next/router'




// export const getStaticProps = async() => {
//     const res = await fetch('http://127.0.0.1:5555/trails');
//     const trailsData = await res.text();
//     // console.log('Trails Response:', trailsData);
//     const trails = JSON.parse(trailsData)
  
  
//     return {
//           props: {
//             trails,
//             // users
//           },
//         }
//       }

// export default function index({trails}){
//     const router = useRouter();
//     if (router.isFallback) {
//         return <div>loading</div>
//     }   
//     return (
//     <div>
//         <ul>
//             {trails.map((trail) => (
//               <>
//                 <div className="card w-96 bg-base-100 shadow-xl">
//                 <figure><img src={trail.thumbnail} alt="Trail Thumbnail" /></figure>
//                 <div className="card-body">
//                 <Link as = {`trail/${trail.id}`} href="/trail/[id]">
//                  <h2 className="card-title">
//                  {trail.name}
//                     </h2>
//                     </Link>
//                  <button className="btn btn-secondary">Votes</button>
//                 <p>{trail.city}, {trail.region}</p>
//                 <div className="card-actions justify-end">
//                 <div className="form-control">
//                 <label className="label cursor-pointer">
//                     <span className="label-text">Ridden</span> 
//                     {/* <input type="checkbox" checked className="checkbox" /> */}
//                 </label>
//                 </div>
//                 <div className="form-control">
//                 <label className="label cursor-pointer">
//                     <span className="label-text">Wishlist</span> 
//                     {/* <input type="checkbox" checked className="checkbox" /> */}
//                 </label>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                     <br/>
//                 {/* <Link href={{ pathname: '/trails', query: { trailId: trail.id } }}> */}
//                 {/* wanting to display name city, thumbnail */}
//               {/* </Link> */}
//               </> 
//             ))}
//         </ul>
//     </div>
//     )
// }
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
                <Link as = {`trail/${trail.id}`} href="/trail/[id]">
                 <h2 className="card-title">
                 {trail.name}
                    </h2>
                    </Link>
                 <button className="btn btn-secondary">Votes</button>
                <p>{trail.city}, {trail.region}</p>
                <div className="card-actions justify-end">
                <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Ridden</span> 
                    {/* <input type="checkbox" checked className="checkbox" /> */}
                </label>
                </div>
                <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Wishlist</span> 
                    {/* <input type="checkbox" checked className="checkbox" /> */}
                </label>
                    </div>
                    </div>
                    </div>
                    </div>
            <br/>
                {/* <Link href={{ pathname: '/trails', query: { trailId: trail.id } }}> */}
                {/* wanting to display name city, thumbnail */}
              {/* </Link> */}
              </li>  
            ))}
        </ul>
    </div>
    )
}






