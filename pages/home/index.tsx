import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { use } from "react";
// import Trails from './Trails'
import { useState } from "react";
import { cursorTo } from "readline";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const trailsRes = await fetch("http://127.0.0.1:5555/trails");
  const trailsData = await trailsRes.text();
  // console.log('Trails Response:', trailsData);
  const trails = JSON.parse(trailsData);

  const usersInfo = await fetch("http://127.0.0.1:5555/users");
  const usersData = await usersInfo.text();
  // console.log('Users Response:', usersData)
  const users = JSON.parse(usersData);

  return {
    props: {
      trails,
      users,
    },
  };
}

export default function App({ trails, users, currUser}) {
  const router = useRouter();
  const [showTrails, setShowTrails] = useState(false);
  if(!currUser){
    console.log("Pushing")
    router.push('/')
    }

  const handleShowTrails = () => {
    setShowTrails(!showTrails);
  };
  console.log(currUser)
  if (!currUser) {
    return (
    <>
    <h2>Please login </h2>
    <h2>L</h2>
      
    </>
    );
  } else {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://bikerumor.com/wp-content/uploads/2019/10/where-to-ride-knoxville-urban-wilderness-mountain-bike-trails-18.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://savemountdiablo.org/wp-content/uploads/2022/03/https___cdn.evbuc_.com_images_122398495_301400668710_1_original-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.canyon.com/on/demandware.static/-/Library-Sites-canyon-shared/default/dwf77f4fb8/images/blog/Mountain/official-mtb-trails-germany-main.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://media2.giphy.com/media/l0MYRFJOjJMCvvSuI/giphy.gif"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <h1>Welcom, {currUser.name}</h1>
      <img src={currUser.profile_picture} alt="profile picture" />
    </>
  );
}
}
