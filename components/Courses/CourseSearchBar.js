'use client'

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material";
import { useState } from 'react';

export default function CourseSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the parent's handler immediately
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleInputChange}
      placeholder="Najdi kurz podle klíčového slova..."
      fullWidth
      sx={{ width: '75%', margin: '0 auto 2rem auto' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
