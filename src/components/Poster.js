import React, { useState } from 'react';
import { PosterStyles } from '../styles/PosterRowStyles';

const Poster = ({ match, id, title, image, description, titleSplit }) => {
  const [hover, setHover] = useState(false);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <>
      <PosterStyles
        image={image}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <div>
            <h3>{title}</h3>
            <p>{truncate(description, 150)}</p>
          </div>
        )}
      </PosterStyles>
    </>
  );
};

export default Poster;
