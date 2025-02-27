import { useEffect, useState } from "react";
import Header from "../../components/header";
import "./home.css";
import memory from "../../services/memory";

const Home = () => {

    const [memories, setmemories] = useState([]);

useEffect(() => {
       //Este mètodo è executado toda vez que a tela inicia.
    
        getMemorieslist();

        document.title = "tela de Detalhes";

    },[]);

    const getMemorieslist = async () => {

    const lista = await memory.getMemories();

    console.log("Lista: ", lista);

    setmemories(lista);

    }

return (
        <>
           
           <Header></Header>




            <main className="app-main">

                <h1>Meus momentos</h1>

                <div className="memories-container">

                    {memories.map((memory, index) => (

                    <a key={index} href={`/memory?id=${memory.id}`}>

                    <div className="memory-card">

                        <div className="image" style={{ backgroundImage: `url(${memory.images[0]})` }}></div>

                        <h2>{memory.title}</h2>

                        <p>{memory.description.substring(0,45)+"..."}</p>

                    </div>

                    </a>

                    ))}

                </div>

            </main>

            <footer className="app-footer">

                <p>Mnemosyne - Ariel Paixão dos Santos</p>

            </footer>
        </>
    );
}

export default Home;