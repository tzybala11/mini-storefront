'use client';

import React from 'react';

function PriceFilter({ priceFilter, setPriceFilter }) {
  const handleChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value);
    setPriceFilter(value);
  };

  return (
    <div className='bg-white border'>
      <label htmlFor='max-price' className='block text-sm font-medium'>
        Max Price:
      </label>
      <input
        type='number'
        id='max-price'
        name='max-price'
        onChange={handleChange}
        min='0'
      />
      <button
        onClick={() => setPriceFilter(0)}
        className='text-xs text-red-500 hover:text-red-600'
      >
        Reset Price Filter
      </button>
    </div>
  );
}

export default PriceFilter;