import React, { Component } from 'react'
import { getMovies } from '../services/movieService'
import Movies from './movies'
import { getGenres } from '../services/genreService'
import Title from '../components/title'
import Message from '../components/message'
import Pagination from '../components/pagination.jsx'
import { paginate } from '../utils/paginate'
import Filter from '../components/filter'
import filterFun from '../utils/filter'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
    
class App extends Component {
    state = { 
        movies: getMovies(),
        genres: getGenres(),
        paginationPageSize: 4,
        currentPage: 1,
        currentFilter: 'all'
    } 
    
    getMoviesCount = () => {
        return getMovies().length;
    }

    handleDelete = movieId => {
        const movies = this.state.movies.filter(movie => movie._id !== movieId);
        this.setState({
            movies: movies
        })
    }

    handleLike = movieId => {
        const movies = this.state.movies,
            movie = movies.find(movie => movie._id === movieId);
        movie.liked = !movie.liked
        this.setState({
            movies
        })
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        })
    }

    handleGenreChange = (genre) => { 
        const movies = genre === 'all' ?
            getMovies() :
            getMovies().filter(movie => movie.genre.name === genre) 
        this.setState({ movies, currentFilter: genre })
    }


    render() {
        const { movies, paginationPageSize, currentPage, currentFilter, genres } = this.state,
            filteredList = filterFun(currentFilter, movies),
            paginated = paginate(filteredList, currentPage, paginationPageSize);

        return (
            <div className='App'>
                {
                    this.state.movies.length ? 
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <Filter
                                        genres={genres}
                                        onGenreChange={this.handleGenreChange}
                                        currentFilter={currentFilter}
                                    />
                                </div>
                                <div className='col-9'>
                                    <Title moviesCount={movies.length} />
                                    <Movies
                                        moviesList={paginated}
                                        onDelete={this.handleDelete}
                                        onLike={this.handleLike}
                                    />
                                    <Pagination
                                        moviesCount={movies.length}
                                        moviesPerPage={paginationPageSize}
                                        onPageChange={this.handlePageChange}
                                        currentPage={currentPage}
                                    />
                                </div>
                            </div>
                        </div> :
                    <Message />
                }
            </div>
        );
    }
}
 
export default App;