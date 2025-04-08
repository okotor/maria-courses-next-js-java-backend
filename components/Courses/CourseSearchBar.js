'use client'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material";

export default function ClientSearchBar() {
  return (
    <TextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Najd kurz podle klíčového slova..."
      fullWidth
      sx={{ width: "75%", padding: "2% auto" }}
    />
  );
}
