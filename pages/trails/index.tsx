import React from 'react'
import Link from "next/link";

function index(currUser,trail) {
    console.log(trail)
  return (
    <div> 
      <h1>{currUser.name}</h1>
        <button className="btn glass">
          <Link href="/">home</Link>
        </button>
        <h1>Trails</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
        <h2 className="card-title">{trail.name}</h2>
            <p>{trail.description}</p>
            </div>
            <figure><img src={trail.thumbnail} alt="Trail" /></figure>
        </div>
    </div>
  )
}

export default index