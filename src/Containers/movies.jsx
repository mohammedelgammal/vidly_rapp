import Movie from '../components/movie'

const Movies = ({moviesList, onDelete, onLike}) => {
    return ( 
        <div className="container">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {moviesList.map(
                    movie => <Movie
                        key={movie._id}
                        movie={movie}
                        onDelete={onDelete}
                        onLike={onLike}
                    />
                )}
            </tbody>
            </table>
        </div>
    );
}
 
export default Movies;