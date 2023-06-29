import React, { useState, useEffect } from 'react';
import Search from './search';
import { Textarea } from '@mui/joy';
import { Button } from '@mui/material';

function Starwars() {
  const [swData, setSwData] = useState('');
  const [count, setCount] = useState(1);
  useEffect(() => {
    try {
      fetch(`https://swapi.dev/api/people/${count}/`)
        .then(res => (res.json()))
        .then(data => (setSwData(data)));
        console.log(swData)
    } catch (err) {

    }
  }, [count])

  return (
    <div>
      <h1>Star Wars</h1>
      <Search />
      <div>
        <Button 
          onClick={() => {setCount(prev => prev+1)}}
          variant="contained">
            Get Next Star Wars Character!
        </Button>
      </div>
      <div>
        <Textarea
          placeholder="Type in here…"
          defaultValue={
            JSON.stringify(swData)
            }
          minRows={12}
          maxRows={6}
        />

        {/* <pre>{JSON.stringify(swData, null, 2)}</pre> */}
      </div>
    </div>
  )
}
export default Starwars;