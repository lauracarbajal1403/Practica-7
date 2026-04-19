import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"
import { useEffect, useState } from "react"
import "../pages/MovieDetails.css"
export function MovieDetails(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    const imageUrl = getMovieImg(movie.poster_path,500)
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data)
            setGeneros(data.genres)
        })
    }, [movieId])

    return(
        <div className="detailsContainer">
            <img src={imageUrl}
            alt={movie.title} className="movieImage col"/>
            <div className="movieDetails">
                <p className="movieTitle">
                    {movie.title}
                </p>
                <p>
                    <strong>Generos: </strong>
                    {generos.map((genero, index) => (
                            <span key={genero.id}>{genero.name}{index < generos.length - 1 ? " | " : ""} </span>
                        ))}
                </p>
                <p>
                    <strong>Descripción: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
    )

}