/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieTabpane from "../components/movies/MovieTabpane";
import MultipleRows from "../components/movieSlick/MultipleRowSlick";
import { movieListAction } from "../redux/actions/MovieAction";
import { theaterClustersAction } from "../redux/actions/TheaterAction";
import MovieCarousel from "../templates/MovieCarousel";

export default function HomePage() {
  const { movieList } = useSelector((state) => {
    return state.movieListReducer;
  });
  const { theaterClusters } = useSelector((state) => {
    return state.theaterReducer;
  });
  const dispatch = useDispatch();

  // console.log(movieList);
  // const movieArr = movieList?.splice(18);
  // console.log(movieArr);

  useEffect(() => {
    dispatch(movieListAction());
    dispatch(theaterClustersAction());
  }, []);

  return (
    <>
      <MovieCarousel />
      <div className="mx-28">
        <div className="home-list-movie container px-10 py-16 mx-auto">
          <MultipleRows movieList={movieList} />
        </div>

        <div className="py-16">
          <MovieTabpane theaterClusters={theaterClusters} />
        </div>
      </div>
    </>
  );
}
