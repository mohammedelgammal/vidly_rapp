import _ from "lodash";
import { PropTypes } from "prop-types";

const pagination = ({
  moviesCount,
  moviesPerPage,
  onPageChange,
  currentPage,
}) => {
  const pagesCount = _.divide(moviesCount, moviesPerPage),
    moviesRange = _.range(1, pagesCount + 1);

  return (
    <div className="container">
      {moviesRange.length === 1 ? null : (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {moviesRange.map((pageNum) => {
              return (
                <li
                  className={
                    pageNum === currentPage ? "page-item active" : "page-item"
                  }
                  key={pageNum}
                >
                  <a
                    className="page-link"
                    onClick={() => onPageChange(pageNum)}
                  >
                    {pageNum}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

pagination.propTypes = {
  moviesCount: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default pagination;
