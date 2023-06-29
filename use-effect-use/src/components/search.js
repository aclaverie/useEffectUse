import React from 'react';
import { useState } from 'react';
import { Autocomplete, TextField, CircularProgress } from '@mui/material';

function Search(){
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const loading = open;


  return(
    <div className='search'>
      <Autocomplete
        open={open}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        // isOptionEqualToValue={(option, value) => option.id === value.id}
        // options={tasksD.map((d) => (d))}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by character"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={10} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  )
}

export default Search;