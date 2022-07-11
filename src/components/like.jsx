import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const like = ({ movie, onLike }) => {
    return (
        <a  onClick={() => onLike(movie._id)}
            style={{cursor: 'pointer'}}>
                { movie.liked ? <FavoriteIcon /> : <FavoriteBorderIcon /> }
        </a>
    );
}
 
export default like;