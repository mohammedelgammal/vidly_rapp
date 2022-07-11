const title = ({moviesCount}) => {
    return ( 
        <div className="container my-4">
            <h4>Showing { moviesCount } movies in the database</h4>
        </div>
    );
}
 
export default title;