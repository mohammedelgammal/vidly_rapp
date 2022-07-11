import React, { Component } from 'react'
import { getMovies } from '../services/movieService';
import Movies from './movies'
import Title from '../components/title'
import Message from '../components/message'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
    
class App extends Component {
    state = { 
        movies: getMovies()
    } 

    getMoviesCount = () => {
        return getMovies().length;
    }

    handleDelete = (movieId) => {
        const movies = this.state.movies.filter(movie => movie._id !== movieId);
        this.setState({
            movies: movies
        })
    }

    handleLike = (movieId) => {
        const movies = this.state.movies,
            movie = movies.find(movie => movie._id === movieId);
        movie.liked = !movie.liked
        this.setState({
            movies
        })
    }

    render() {
        return (
            <div className='App'>
                {
                    this.state.movies.length ? 
                        <React.Fragment>
                            <Title moviesCount={this.state.movies.length} />
                            <Movies moviesList={this.state.movies} onDelete={this.handleDelete} onLike={this.handleLike} />
                        </React.Fragment> :
                        <Message />
                }
            </div>
        );
    }
}
 
export default App;