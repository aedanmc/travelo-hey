import TextField from '@mui/material/TextField';
import React from "react";
import { Controller } from "react-hook-form";

export default function ReviewInputText({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField onChange={onChange} variant="filled" value={value} multiline rows={10} label={label} />
      )}
    />
  );
}
