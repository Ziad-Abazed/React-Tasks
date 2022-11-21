import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieItem extends Component {
  render() {
    const { movie } = this.props;
    const image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return (
      <div className="col">
        <div className="card mb-3 text-white bg-dark" style={{ maxWidth: 500 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start h-100" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">
                <Link to={'movie/' + movie.id} style={{color:"red"}} >See More</Link>
                </p>
                <p className="card-text">
                  <small className="text-muted">{movie.release_date}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieItem;
