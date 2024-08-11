import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg"

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex justify-start ml-[20%] items-center">
      <i class="ri-search-line text-zinc-400 text-3xl"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[40%] text-zinc-200 mx-6 p-3 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />

      {query.length > 0 && (
        <i
          class="ri-close-fill text-zinc-400 text-3xl"
          onClick={() => setquery("")}
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-300 top-[90%] overflow-auto">
        {searches &&
          searches.map((s, i) => (
            <Link
              key={i}
              className="text-zinc-700 flex justify-start items-center border-b-[1.5px] border-zinc-100 w-[100%] p-4 hover:text-black hover:bg-zinc-400 font-semibold text-lg duration-300"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded-md mr-10 shadow-md"
                src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${
                  s.backdrop_path || s.profile_path
                }` : noimage}
                alt=""
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Topnav;
