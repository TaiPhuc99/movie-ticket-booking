/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckWindowSize from "../components/checkSize/CheckWindowSize";
import MovieTabpane from "../components/movies/MovieTabpane";
import MultipleRows from "../components/movieSlick/MultipleRowSlick";
import { movieListAction } from "../redux/actions/MovieAction";
import { theaterClustersAction } from "../redux/actions/TheaterAction";
import MovieCarousel from "../templates/MovieCarousel";

export default function HomePage() {
  const { movieList } = useSelector((state) => {
    return state.movieListReducer;
  });
  // console.log(movieList);
  const { theaterClusters } = useSelector((state) => {
    return state.theaterReducer;
  });
  const dispatch = useDispatch();
  const { width } = CheckWindowSize();
  // console.log(width);

  useEffect(() => {
    dispatch(movieListAction());
    dispatch(theaterClustersAction());
  }, []);

  return (
    <div className="home-page carousel-bg">
      <MovieCarousel />
      <div className="container mx-auto">
        <div className="mx-8 lg:mx-16 xl:mx-28 py-16">
          <MultipleRows movieList={movieList} />
        </div>

        <div className="mx-8 lg:mx-16 xl:mx-28 py-8">
          <MovieTabpane theaterClusters={theaterClusters} />
        </div>
      </div>
    </div>
  );
}
