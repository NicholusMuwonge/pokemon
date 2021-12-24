import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PaginationComponent from "./ui/Pagination";
import { getAllPokemons } from "../allPokemons/AllPokemonsActions";
import { LIMIT } from "../allPokemons/actionTypes";
import { RootStore } from "../../redux/store";

const PaginationContainer = () => {
  const { page } = useParams<{ page: string | any }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageCount = useSelector(
    (centralState: RootStore) => centralState.pokemons.count
  );
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const handleChange = (event: any, value: number): void => {
    setCurrentPage(value);
    navigate(`/pokemons/page/${value}`, { replace: true });
    if (value === 1) {
      dispatch(getAllPokemons({ offset: 0 }));
    } else {
      dispatch(getAllPokemons({ offset: (value - 1) * LIMIT }));
    }
  };
  React.useEffect(() => {
    if (parseInt(page)) {
      setCurrentPage(parseInt(page));
    }
  }, [page, dispatch]);
  return (
    <PaginationComponent
      currentPage={currentPage}
      handleChange={handleChange}
      pageCount={Math.ceil(pageCount / LIMIT)}
    />
  );
};

export default PaginationContainer;
