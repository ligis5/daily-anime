import "./App.css";
import AnimeList from "./animeList.js/anime-list";

function App() {
  return (
    <div className="App">
      <h1 className="title">Daily Anime</h1>
      <AnimeList genre="random" />
      <AnimeList genre="random" />
      <AnimeList genre="random" />
      <AnimeList genre="random" />
      <AnimeList genre="random" />
    </div>
  );
}

export default App;
