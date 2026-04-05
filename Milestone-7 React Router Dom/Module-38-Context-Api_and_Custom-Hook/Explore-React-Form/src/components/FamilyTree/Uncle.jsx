import React from 'react';
import Cousin from './Cousin';

const Uncle = ({asset}) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className='flex'>
        <Cousin asset={asset} name='Siam Chowdhury'></Cousin>
        <Cousin name='Sun Mollah'></Cousin>
      </section>
    </div>
  );
};

export default Uncle;