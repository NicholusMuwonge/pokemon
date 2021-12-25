import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { getAllPokemons } from "./AllPokemonsActions";
import AllPokemonsComponent from "./ui/AllPokemonsComponent";
import { useParams } from "react-router-dom";
import PaginationContainer from "../pagination/PaginationContainer";
import { LIMIT } from "./actionTypes";
import NotFound from "../notFound/NotFound";

const AllPokemonsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useParams<{ page: string | any }>();
  const allPokemons = useSelector(
    (centralState: RootStore) => centralState.pokemons.results
  );
  const pageCount = useSelector(
    (centralState: RootStore) => centralState.pokemons.count
  );
  const totalNumberOfPages = Math.ceil(pageCount / LIMIT);
  useEffect(() => {
    if (
      parseInt(page) &&
      parseInt(page) > 1 &&
      parseInt(page) < totalNumberOfPages + 1
    ) {
      dispatch(getAllPokemons({ offset: (parseInt(page) - 1) * LIMIT }));
    } else {
      dispatch(getAllPokemons({ offset: 0 }));
    }
  }, [page, dispatch, totalNumberOfPages]);
  return (
    <>
      {(parseInt(page) && parseInt(page) < 1) ||
      (parseInt(page) && parseInt(page) > totalNumberOfPages + 1) ? (
        <NotFound />
      ) : (
        <>
          <AllPokemonsComponent allPokemons={allPokemons} />
          <PaginationContainer />
        </>
      )}
    </>
  );
};

export default AllPokemonsContainer;
