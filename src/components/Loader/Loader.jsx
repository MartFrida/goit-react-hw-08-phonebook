import React from 'react';
import { DNA } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className='flex justify-center items-center bg-blue-900 min-h-screen'>
      <DNA
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
      <h2 className='text-white text-2xl font-bold text-center'>Auth in progress...</h2>
    </div>
  );
}


