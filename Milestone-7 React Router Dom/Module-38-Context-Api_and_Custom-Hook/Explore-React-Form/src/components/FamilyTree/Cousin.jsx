import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === 'Siam Chowdhury' && <Special asset={asset}></Special>}
      {name === 'Shakil Hossain' && <Friend></Friend>}
    </div>
  );
};

export default Cousin;