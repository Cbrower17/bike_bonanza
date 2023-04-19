import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect,useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    fetch('/checklogin')
    .then(r => r.json())
    .then(user => setUser(user))
  },[])
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      "name": username,
      "password": password
    }

    fetch("/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    .then(r => r.json())
    .then(user=>setUser(user))
  }
  console.log(user)
  
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout",{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

  
  }
  
  function checktype(e) {
    e.preventDefault();
    fetch("/get_type")
    .then(r => r.json())
    .then(data => console.log(data))
  }

  if (user) {
    return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

    <h2>Welcome, {user.name}!</h2>
      <form onSubmit={handleLogout}>
        <button type="submit">Logout</button>
      </form>
      <form onSubmit={checktype}>
        <button type="submit">checktype</button>
      </form>
    </>
    );
  } else {
    return (
      <>
      <div className="navbar bg-neutral text-neutral-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
<div className="navbar bg-base-300">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
<div className="navbar bg-primary text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
</div>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>password</p>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="btm-nav">
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </button>
  <button className="active">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </button>
  <button>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </button>
</div>
      </>
    )
  }
}