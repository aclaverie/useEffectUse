import React, { useState, useEffect } from 'react';
import Search from './search';
import Starcard from './starcard';
import { Textarea } from '@mui/joy';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

//images url = `https://starwars-visualguide.com/assets/img/characters/${count}.jpg`
function Starwars() {
  const [loading, setloading] = useState(true);
  const [direction, setDirection] = useState('');
  const [swData, setSwData] = useState('');
  const [metaData, setMetaData] = useState({
    count: 0,
    nextPage: '',
    previousPage: '',
    results: []
  })
  const [count, setCount] = useState(1);
  useEffect(() => {
    (async () => {
      // const url = `https://swapi.dev/api/people/${count}/`;
      const url = `https://swapi.dev/api/people/?page=${count}`;
      await fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
          if (!data.error) {
            console.log(data.detail);
            if (data.detail === "Not found") {
              //snackbar pop up no records found
              if (direction === 'p') {
                setCount(prev => prev + 1);
              } else if (direction === 'n') {
                setCount(prev => prev - 1);
              }
            } else {
              setMetaData((p) => [
                p.count = data.count,
                p.nextPage = data.next,
                p.previousPage = data.previous,
                p.results = data.results
              ]);
              setSwData([...data.results]);
              setloading(false);
            }
          }
        }).catch((err) => {
          console.log(err);
        })
    })();
  }, [count])

  function NextTen() {
    setloading(true);
    setDirection('n');
    setCount(prev => prev + 1);
  }
  function PreviousTen() {
    setDirection('p');
    setloading(true);
    setCount(prev => prev - 1);
  }

  return (
    <div className='star-container'>
      <h1>{metaData.count} Star Wars Characters</h1>
      {/* <Search swData={swData} /> */}
      <div className='star-prev-next-btn' >
        <Button
          onClick={PreviousTen}
          variant="outlined"
          fullWidth
        >
          Previous 10
        </Button>
        <Button
          onClick={NextTen}
          variant="outlined"
          fullWidth
        >
          Next 10
        </Button>
      </div>
      <div>
        {loading ?
          <CircularProgress color="primary" size={20} style={{ marginTop: 12 }} /> :
          <Starcard swd={swData} page={count} />
          // <Textarea
          //   placeholder="StarWars Character Info Goes Here…"
          //   defaultValue={swData}
          // />
        }
      </div>
    </div>
  )
}
export default Starwars;