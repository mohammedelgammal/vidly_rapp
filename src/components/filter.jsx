const filter = ({ genres, onGenreChange, currentFilter }) => {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        <li
          className={
            currentFilter === "all"
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreChange("all")}
        >
          All Genres
        </li>
        {genres.map((genre) => {
          return (
            <li
              key={genre._id}
              className={
                genre.name === currentFilter
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onGenreChange(genre.name)}
            >
              {genre.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default filter;
