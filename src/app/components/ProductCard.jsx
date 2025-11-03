'use client';

import React from 'react';

function ProductCard({ product, onInCart }) {
    const { id, name, price, category, stock } = product;
    const isOutofStock = stock <= 0;

    return (
        <div className='border'>
            <div>
                <h3 className='text-xl font-bold'>{name}</h3>
                <p className='text-sm'>{category}</p>
                <p className='text-xl'>{price}</p>
                <p className={`text-sm ${isOutofStock ? 'text-red-600' : 'text-green-600'}`}>
                    Stock: {isOutofStock ? 'Out of Stock' : '${stock} available'}
                </p>
            </div>
            <button
                onClick={() => onInCart(id)}
                disabled={isOutofStock}
                className={`${isOutofStock
                    ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
                    : 'bg-green-500 text-white hover: bg-green-600'
                }`}>
                    {isOutofStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
        </div>
    );
}

export default ProductCard;