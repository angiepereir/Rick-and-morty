import "./galeriaId.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

const GaleriaId = () => {
    const {id} = useParams();
    const [character, setCharacter]= useState({});

    useEffect(()=>{
        const getCharacter = async()=>{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            setCharacter(res.data)
        }
        getCharacter()
    },[id]);

    if (!character){
        return <div>Loading...</div>
    }
    return(
        <div className="id-galeria">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.type}</p>
        </div>
    )
}

export default GaleriaId