import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import * as uuid from 'uuid';

export default function ComboBox({recipes,setFoodInput}) {
  return (
    <Stack spacing={2} sx={{ width: "100%", paddingBottom:"20px" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={recipes?.map((option) => option)}
        
        renderOption={(props, option) => {
          return (
            <li {...props} key={uuid.v4()}>
              {option}
            </li>
          );
        }}
        sx={{
            // border: "1px solid blue",
            "& .MuiOutlinedInput-root": {
                border: "none",
                borderRadius: "4px",
                padding: "8px 16px"
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #10a37f"
            },
            "&.Mui-focused .MuiInputLabel-outlined": {
                color: "#10a37f"
            }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Comece a digitar"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
        onChange={(event, newValue) => {
            setFoodInput(newValue);
        }}
      />
    </Stack>
  );
}
