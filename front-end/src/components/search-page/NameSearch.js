import * as React from 'react';
import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

export default function NameSearch({ placeholder, onInputChange }) {
  return (
    <div>
      <Input
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <FormControl>
        <Select />
      </FormControl>
    </div>
  );
}
