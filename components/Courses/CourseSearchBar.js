'use client'

import { FaSearch } from 'react-icons/fa';
import { InputAdornment, TextField } from "@mui/material";
import { useState } from 'react';
import classes from './CourseSearchBar.module.css';

export default function CourseSearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the parent's handler immediately
  };

  return (
    <div className={classes.searchWrapper}>
      <TextField
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Najdi kurz podle klíčového slova..."
        className={classes.searchInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch style={{ color: '#888', fontSize: '1.2rem' }} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
