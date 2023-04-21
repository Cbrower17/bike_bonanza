import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { use } from "react";
import Trails from "../pages/Trails";
import { useState } from "react";
import setcurrUser from "../pages/_app";

export default function Navbar({ currUser, setcurrUser }) {
  if (!currUser) {
    return <div className="text-dblue">Loading.. </div>;
  }
  const router = useRouter();
  const [showTrails, setShowTrails] = useState(false);
  console.log(currUser);

  const handleShowTrails = () => {
    setShowTrails(!showTrails);
  };
  function handleLogout(e) {
    e.preventDefault();
    fetch("/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setcurrUser(null);
    router.push("/");
  }

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/trails">Trails</Link>
                <button onClick={handleShowTrails}>Show Trails</button>
                <button onClick={handleLogout}>Logout</button>
                <Link href="/users">Users</Link>
                <Link as={`user/${currUser.id}`} href="/user/[something]">
                  account
                </Link>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className="btn btn-ghost normal-case text-xl">
            <Link href="/">Bike Bonanny</Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
             
              <div className="avatar">
                <div className="w-18 mask mask-squircle">
                  <img src={currUser.profile_picture} />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

// {showTrails && (
//                   <ul>
//                     {trails.map((trail) => (
//                       <li key={trail.id}>
//                         <Link
//                           href={{
//                             pathname: "/trails",
//                             query: { trailId: trail.id },
//                           }}
//                         >
//                           {trail.name}
//                           <br />
//                           {trail.city}
//                           <br />
//                           {trail.thumbnail}
//                           <br />

//                           {/* wanting to display name city, thumbnail */}
//                           </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                   <li>
