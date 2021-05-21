import "../styles/ContentView.css";

const ContentView = ({ id, poster, title, date, media_type }) => {
  return (
    <div className="media">
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500/${poster}`}
        alt="MovieCover"
      />
      <b className="title">{title}</b>
      <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
      <span className="DownTitle">{date}</span>
    </div>
  );
};

export default ContentView;
