import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./galeria.css";

const Galeria = () => {
    const [Character, setCharacter] = useState ([]);
    const [pagina, setPagina] = useState(10);
    const [buscador, setBuscador] = useState("");

    useEffect(()=>{
        const getCharacter = async ()=>{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`);

        setCharacter(res.data.results);

        };
        getCharacter()
    },[pagina]);

    const paginaAtras = ()=>{
        if (pagina > 1){
            setPagina(pagina - 1);
        }
    };

    const paginaSiguiente = ()=> {
        if(pagina < 20) {
            setPagina(pagina + 1);
        }

    };

    const filtroCharacters = Character.filter((character)=>
     character.name.toLowerCase().includes(buscador.toLowerCase())
     );


  return (
  <div className="Galeria-container">
    <div className="Galeria-pagina">
     <button disabled={pagina===1} onClick={paginaAtras}>Atras</button>
     <button onClick={paginaSiguiente}>Siguiente</button>
    </div>
    <h2 className="Titulo-galeria">Galeria</h2>
    <div className="Busqueda-galeria">
        <input
         type="text"
         placeholder="Personajes"
         value={buscador}
         onChange={(event)=> setBuscador(event.target.value)}
         />
    </div>
    <div className="Galeria-grid">
        {filtroCharacters.map((Character)=>(
            <Link key={Character.id} to={`/GaleriaId/${Character.id}`}>
                <figure className="Personaje">
                    <img src={Character.image} alt={Character.name} />
                   <figcaption className="Personaje-nombre">
                    {Character.name}
                    </figcaption> 
                </figure>
            </Link>
        ))}

    </div>
  </div> 
  );
};

export default Galeria