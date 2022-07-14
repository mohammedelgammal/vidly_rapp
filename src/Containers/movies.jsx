import Movie from "../components/movie";

const Movies = ({ moviesList, onDelete, onLike, onSort }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => onSort("title", "asc")} scope="col">
              Title
            </th>
            <th onClick={() => onSort("genre.name", "asc")} scope="col">
              Genre
            </th>
            <th onClick={() => onSort("numberInStock", "asc")} scope="col">
              Stock
            </th>
            <th onClick={() => onSort("dailyRentalRate", "asc")} scope="col">
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesList.map((movie) => (
            <Movie
              key={movie._id}
              movie={movie}
              onDelete={onDelete}
              onLike={onLike}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movies;
