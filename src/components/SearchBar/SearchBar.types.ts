export type SarchBarProps = {
  placeholder: string;
  search: string;
  setSearch: (searchTerm: string) => void;
  onSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
