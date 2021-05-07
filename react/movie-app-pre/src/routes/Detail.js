import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      const movie = location.state;
      return (
        <div className="detail">
          <img src={movie.poster} alt={movie.title} title={movie.title} />
          <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">
              {movie.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{movie.summary.slice(0, 180)}...</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
