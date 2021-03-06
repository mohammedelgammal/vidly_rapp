import React, { Component } from "react";
import { getMovies } from "../services/movieService";
import Movies from "./movies";
import { getGenres } from "../services/genreService";
import Title from "../components/title";
import Message from "../components/message";
import Pagination from "../components/pagination.jsx";
import { paginate } from "../utils/paginate";
import Filter from "../components/filter";
import filterFun from "../utils/filter";
import _ from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "../components/sharedLayout";
import Login from "./login";

class App extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    paginationPageSize: 4,
    currentPage: 1,
    currentFilter: "all",
    sorting: { column: "title", order: "asc" },
  };

  getMoviesCount = () => {
    return getMovies().length;
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieId);
    this.setState({
      movies: movies,
    });
  };

  handleLike = (movieId) => {
    const movies = this.state.movies,
      movie = movies.find((movie) => movie._id === movieId);
    movie.liked = !movie.liked;
    this.setState({
      movies,
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenreChange = (genre) => {
    const movies =
      genre === "all"
        ? getMovies()
        : getMovies().filter((movie) => movie.genre.name === genre);
    this.setState({ movies, currentFilter: genre });
  };

  handleSort = (column, order) => {
    const sorting = { ...this.state.sorting };
    sorting["column"] = column;
    sorting["order"] = sorting["order"] === "asc" ? "desc" : "asc";

    this.setState({
      sorting,
    });
  };

  render() {
    const {
        movies,
        paginationPageSize,
        currentPage,
        currentFilter,
        genres,
        sorting,
      } = this.state,
      filteredList = filterFun(currentFilter, movies),
      sortedList = _.orderBy(filteredList, [sorting.column], [sorting.order]),
      paginatedList = paginate(sortedList, currentPage, paginationPageSize);

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              index
              path="movies"
              element={
                <div className="App">
                  {this.state.movies.length ? (
                    <div className="container">
                      <div className="row">
                        <div className="col-3">
                          <Filter
                            genres={genres}
                            onGenreChange={this.handleGenreChange}
                            currentFilter={currentFilter}
                          />
                        </div>
                        <div className="col-9">
                          <Title moviesCount={movies.length} />
                          <Movies
                            moviesList={paginatedList}
                            onDelete={this.handleDelete}
                            onLike={this.handleLike}
                            onSort={this.handleSort}
                          />
                          <Pagination
                            moviesCount={movies.length}
                            moviesPerPage={paginationPageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Message />
                  )}
                </div>
              }
            />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
