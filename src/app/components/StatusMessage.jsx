'use client';

import React from 'react';

function StatusMessage({ isLoading, isError, isEmpty }) {
    if (isLoading) {
        return (
            <div className=''>
                <p className=''>
                    Please wait. Loading products.
                </p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className=''>
                <p className=''>
                    Encountered an error while loading data. Please try again later.
                </p>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className=''>
                <p className=''>
                    No products located.
                </p>
            </div>
        );
    }

    return null;
}

export default StatusMessage;