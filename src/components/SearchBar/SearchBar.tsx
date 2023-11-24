import React from "react";
import { SarchBarProps } from "./SearchBar.types";
import * as S from "./SearchBar.styles";

const SearchBar = ({
  placeholder,
  search,
  setSearch,
  onSearch,
}: SarchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <S.SearchBarContainer>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={onSearch}
        value={search}
      />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
