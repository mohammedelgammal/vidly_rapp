const filterFun = (genre, list) => {
    const movies =
        genre === 'all' ?
        list :
        list.filter(movie => movie.genre.name === genre) 
    return movies
}

export default filterFun;