import { TextField } from "@mui/material";

interface Props {
  searchValue: string;
  setSearchValue: (val: string) => void;
}
export default function SearchBox({ searchValue, setSearchValue }: Props) {
  return (
    <TextField
      label="Search ..."
      variant="filled"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
