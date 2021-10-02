import React from 'react'
import { Link } from "react-router-dom";
import Camaro3 from '../images/camaro.jpg'
import Daryl3 from '../images/daryl.jpg'
import España3 from '../images/españa.jpg'
import Ironman3 from '../images/ironman.jpg'
import Londres3 from '../images/londres.jpg'
import Rick3 from '../images/rick.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
         <Link to="/Camaro" className="links"> 
            <figure>
                <img src={Camaro3} alt="" className="tamaño-img"></img>
                <figcaption>Camaro</figcaption>
            </figure>
        </Link>

        <Link to="/Daryl" className="links"> 
            <figure>
                <img src={Daryl3} alt="" className="tamaño-img"></img>
                <figcaption>Daryl</figcaption>
            </figure>
        </Link>

        <Link to="/España" className="links"> 
            <figure>
                <img src={España3}alt="" className="tamaño-img"></img>
                <figcaption>España</figcaption>
            </figure>
        </Link>

        <Link to="/Ironman" className="links"> 
            <figure>
                <img src={Ironman3} alt="" className="tamaño-img"></img>
                <figcaption>Ironman</figcaption>
            </figure>
        </Link>

        <Link to="/Londres" className="links"> 
            <figure>
                <img src={Londres3} alt="" className="tamaño-img"></img>
                <figcaption>Londres</figcaption>
            </figure>
        </Link>

        <Link to="/Rick" className="links rick" > 
            <figure>
                <img src={Rick3}alt="" className="tamaño-img"></img>
                <figcaption>Rick</figcaption>
            </figure>
        </Link>
           
        </div>
    )
}

export default Navegacion
