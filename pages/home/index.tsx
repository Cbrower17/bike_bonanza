import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { use } from 'react'
// import Trails from './Trails'
import {useState} from 'react'
import Weather from '@/components/weather'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const trailsRes = await fetch('http://127.0.0.1:5555/trails');
  const trailsData = await trailsRes.text();
  // console.log('Trails Response:', trailsData);
  const trails = JSON.parse(trailsData)

  const usersInfo = await fetch('http://127.0.0.1:5555/users');
  const usersData = await usersInfo.text()
  // console.log('Users Response:', usersData)
  const users = JSON.parse(usersData)

  return {
        props: {
          trails,
          users
        },
      }
    }


export default function App({trails, users}) {
  const router = useRouter();
  const [showTrails, setShowTrails] = useState(false)

  const handleShowTrails = () => {
    setShowTrails(!showTrails);
  };

  return (
    <>
    <Weather />
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> 
          <Link href="/trails">Trails</Link>
          {/* <button onClick={handleShowTrails}>Show Trails</button> */}
      {showTrails && (
        <ul>
          {trails.map((trail) => (
            <li key={trail.id}>
              <Link href={{ pathname: '/trails', query: { trailId: trail.id } }}>
                {trail.name}
                <br />
                {trail.city}
                <br />
                {trail.thumbnail}
                <br />

              </Link>
            </li>
          ))}
        </ul>
      )}
          </li>
        <li>
          <Link href ="/users">Users</Link>
          </li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Bike Bonanza</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>

    </>
  )
}

