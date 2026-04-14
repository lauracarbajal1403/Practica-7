import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { getMovieImg } from "../utils/getMovieImg"
import { useEffect, useState } from "react"
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

    return(<div>
        <img src={imageUrl}
        alt={movie.title}/>
        <div>
            <p>
                <strong>Titulo: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Generos: </strong>
                {generos.map((genero) => (
                        <span key={genero.id}>{genero.name} </span>
                    ))}
            </p>
            <p>
                <strong>Descripcion: </strong>
                {movie.overview}
            </p>
        </div>
    </div>)

}