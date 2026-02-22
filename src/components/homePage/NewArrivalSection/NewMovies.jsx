'use client';
import React, { useState, useEffect } from 'react'
import getMovies from "../../../app/api/moviesAPI";
import HeaderOfSection from "../HeaderOfSection"
import SwiperComponent from "../SwiperComponent"

const NewMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMovies(2);
            setMovies(data.results);
        };

        fetchData();
    }, []);
    return (
        <div className="w-full flex flex-col items-start gap-7 my-10 overflow-hidden px-5 md:px-20">
            <HeaderOfSection header="new movies" />
            <SwiperComponent movies={movies} />
        </div>
    )
}

export default NewMovies
