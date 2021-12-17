import { useEffect, useState } from "react";
import axios from "../lib/axios";
import requests from "../lib/requests";

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }

        fetchData()
    }, [])

    return (
        <header
            className="h-[448px] relative z-0 object-contain text-white"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center", 
            }}
        >
            <div className="ml-[30px] pt-[140px] h-[190px] w-full">
                <h1 className="text-5xl font-bold pb-5 ">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div>
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <h1
                    className="w-[45rem] font-semibold text-sm pt-4 max-h-[360px]  h-10"
                >
                    {movie?.overview}
                </h1>
            </div>
            <div className="bg-gradient-to-b from-transparent to-black h-[17.4rem]"/>
        </header>
    )
}

export default Banner;