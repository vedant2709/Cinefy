import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidenav() {

  
  return (
    <div className="w-[20%] h-full border-r-[1.5px] border-zinc-500 p-8">
      <h1 className="text-2xl text-white font-bold flex justify-start gap-2 items-center">
        <i class="ri-tv-fill text-[#6556CD] "></i>
        <span className="">SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-6 mb-4">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-tv-2-fill mr-2"></i>
          TV Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none bg-zinc-400 h-[1px] mt-4"/>
      <nav className="flex flex-col text-zinc-400 text-lg gap-2">
        <h1 className="text-white font-semibold text-xl mt-6 mb-4 whitespace-nowrap">
          Webisite Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-information-2-fill mr-2"></i>
          About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i class="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
}

export default Sidenav;
