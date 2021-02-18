import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

function MovieCard({ el }) {

    return (

        <div className="movie_card " id="bright" style={{
            background: "url(" + el.posterUrl + ")", backgroundSize: '50% 100%'
        }}>
            <Link to={`/Trailer/${el.title}`} style={{ textDecoration: "none" }}> <div className="info_section">
                <div className="movie_header">
                    <img className="locandina" src={el.posterUrl} alt='' />
                    <h1>{el.title}</h1>
                </div>
                <div className="movie_desc">
                    <p className="text">{el.description}</p>
                    <div >
                        <Link to={`/Trailer/${el.title}`}><Button className="mr-2" variant="outline-info">See More</Button>
                        </Link>
                        {/* <Button variant="outline-info">Trailer</Button> */}
                    </div>
                </div>
                <div className="movie_social pl-4">
                    {"⭐".repeat(el.rate)}
                </div>
            </div >
                <div className="blur_back bright_back "></div>
            </Link >
        </div >

    )
}

export default MovieCard
