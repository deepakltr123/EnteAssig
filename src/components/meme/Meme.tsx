// meme.tsx

import React, { useState } from 'react';
import './meme.css';

function Meme({ meme }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className="first" onClick={handleClick}>
      <img src={meme.data.thumbnail} alt="Thumbnail" />
      {isOpen&&
        <div className="image" onClick={handleClick}>
          <img src={meme.data.url} alt="Main Meme" className='main-image'/>
        </div>}
    </div>
  );
}

export default Meme;
