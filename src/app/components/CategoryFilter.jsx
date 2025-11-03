'use client';

import React from 'react';

function CategoryFilter({ categoryFilter, setCategoryFilter, categories }) {
    const handleChange = (event) => {
        setCategoryFilter(event.target.value);
    };

    return (
        <div className='bg-white border'>
            <label htmlFor='category' className='block text-sm font-medium'>
                Filter by Category:
            </label>
            <select
                id='category'
                name='category'
                value={categoryFilter}
                onChange={handleChange}
                className='mt-1 block w-full pl-3 pr-10 py-2 text-base'>
                <option value=''>All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                ))}
                </select>
        </div>
    );
}

export default CategoryFilter;