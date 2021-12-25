import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { pokemonObj } from "./actionTypes";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAllPokemons, getSearchoptionData } from "./searchAction";
import SearchBar from "./ui/Search";

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page } = useParams();
  const pageCount = useSelector(
    (centralState: RootStore) => centralState.pokemons.count
  );
  const pokemonSearchOptions = useSelector(
    (centralState: RootStore) => centralState.pokemonSearchOptions.results
  );
  const [value, setValue] = React.useState<pokemonObj | string>("");
  const [inputValue, setInputValue] = React.useState<string>("");
  React.useEffect(() => {
    dispatch(fetchAllPokemons(pageCount, 0));
  }, [pageCount, dispatch]);

  React.useEffect(() => {
    if (typeof value === "object" && value?.url) {
      dispatch(getSearchoptionData([value?.url]));
      navigate(`/pokemon/${value?.name}`, { state: { from: page ?? "1" } });
    }
  }, [value, dispatch]);

  const onChange = (event: any, newValue: pokemonObj): void =>
    setValue(newValue);
  const onInputChange = (event: any, newInputValue: string): void =>
    setInputValue(newInputValue);
  return (
    <SearchBar
      value={value}
      onChange={onChange}
      inputValue={inputValue}
      onInputChange={onInputChange}
      options={inputValue.length >= 3 ? pokemonSearchOptions : []}
    />
  );
};
export default SearchBarContainer;
