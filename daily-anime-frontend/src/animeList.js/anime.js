const Anime = ({ anime }) => {
  return (
    <div className="anime">
      <h4>{anime.title}</h4>
      <img src={anime.main_picture.medium} className="anime-img" />
    </div>
  );
};

export default Anime;
