import { useEffect, useState } from "react";
import Anime from "./anime";

const AnimeList = ({ genre }) => {
  const [animeData, setAnimeData] = useState([]);

  const getAnime = async () => {
    const res = await fetch("http://localhost:9001/anime");
    const data = await res.json();
    setAnimeData(data);
  };
  useEffect(() => {
    getAnime();
  }, []);

  return (
    <div>
      <h1 className="genre">
        {genre[0] === genre[0].toLowerCase()
          ? genre[0].toUpperCase() + genre.substr(1)
          : genre}
      </h1>
      <div className="animeList">
        {animeData.map((anime) => {
          return <Anime anime={anime} key={anime.id} />;
        })}
      </div>
    </div>
  );
};

export default AnimeList;
