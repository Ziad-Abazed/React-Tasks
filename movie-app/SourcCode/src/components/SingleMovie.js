import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';


const SingleMovie = () => {

    const [movie, setMovie] = React.useState({
        movie: {
            id: '',
            title: '',
            image: '',
            overview: '',
            vote_average: '',
            release_date: '',
            media_type: '',
            poster_path:''
        }

    });
    const { id } = useParams();
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=ac57188f35fb809c3ec1403202a7f29f&language=en-US')
            .then(response => {
                setMovie({
                    movie: response.data
                })
            })
            .catch(error => console.log(error))
    }, []);
    const navigate = useNavigate('');
    const handleClick = () => {
        // 👇️ replace set to true
        navigate('/', { replace: true });
    };

    console.log(id);

    // const image = `https://image.tmdb.org/t/p/w500`
    const singleMovie = movie.movie;
    const image = `https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`

    return (
       



      <div className="container mt-5 mb-5">
  <div className="row d-flex justify-content-center bg-dark">
    <div className="col-md-10">
      <div className="card bg-dark text-white">
        <div className="row">
          <div className="col-md-6">
            <div className="images p-3">
              <div className="text-center p-4"> <img id="main-image" src={image} width={250} /> </div>
            
            </div>
          </div>
          <div className="col-md-6">
            <div className="product p-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left" /> <span className="ml-1"> <Link to='/' >Back</Link></span> </div> <i className="fa fa-shopping-cart text-muted" />
              </div>
              <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand"></span>
                <h5 className="text-uppercase">{movie.movie.original_title}</h5>
                <div className="price d-flex flex-row align-items-center"> <span className="act-price">{singleMovie.original_language}</span>
                  <div className="ml-2"> <small className="dis-price"></small> <span></span> </div>
                </div>
              </div>
              <p className="about">{movie.movie.overview}</p>
              <div className="sizes mt-5">
               
              </div>
              <div className="cart mt-4 align-items-center">  <i className="fa fa-heart text-muted" /> <i className="fa fa-share-alt text-muted" /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}


export default SingleMovie;