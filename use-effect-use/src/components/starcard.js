import React, { useState, useEffect } from 'react';

function Starcard(props) {
  const [img, setImg] = useState(props.page);

  useEffect(()=>{
    setImg(pre => pre + 1);
  },[])

  const starcard = props.swd.map((s) => {
    const imagesUrl = `https://starwars-visualguide.com/assets/img/characters/${img}.jpg`;
    
    return (
      <div key={s.name} className='star-card'>
        <img src={imagesUrl} width={'15%'} alt={s.name} />
        <h3>{s.name}</h3>
      </div>
    )
  });
  
  return starcard;
}

export default Starcard;