import axios from "axios";
import React, { Component } from "react";
import MovieItem from "./MovieCard";

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: "",
          title: "",
          image: "",
          overview: "",
          vote_average: "",
          release_date: "",
          media_type: "",
        },
      ],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/2/recommendations?api_key=ac57188f35fb809c3ec1403202a7f29f&language=en-US&page=1"
      )
      .then((response) => {
        this.setState({
          movies: response.data.results,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="container bg-dark mt-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {this.state.movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default MoviesContainer;
