import Like from './like'

const movie = ({ onDelete, movie, onLike }) => {
    return (
        <tr key={movie._id}>
            <th scope="row">{movie.title}</th>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td><Like onLike={onLike} movie={movie} /></td>
            <td><button onClick={() => onDelete(movie._id)} className="btn btn-danger">Delete</button></td>
        </tr>
    );
}
 
export default movie;