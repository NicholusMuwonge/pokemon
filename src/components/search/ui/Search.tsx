import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { SearchBarProps } from "../actionTypes";
import { searchStyles } from "./styles";

const SearchBar = ({
  value,
  onChange,
  onInputChange,
  options,
  inputValue,
}: SearchBarProps) => {
  return (
    <div style={searchStyles.container}>
      <Autocomplete
        disablePortal
        value={value}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.name || ""}
        options={options}
        style={searchStyles.searchBar}
        renderInput={(params) => (
          <TextField {...params} label="Search Pokémons By Name." />
        )}
      />
    </div>
  );
};
export default SearchBar;
