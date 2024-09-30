import MealsDB from '@/components/MealsDB/mealsDB';
import React from 'react';

const page = () => {
    return (
        <div className='container  text-center h-screen'>
            <div className='mx-auto mt-12 p-5'>
                <h1 className='text-4xl text-red-500'>Choose Your Meals </h1>
                <p>Choose meals of you Choosing by Searching</p>
                <MealsDB></MealsDB>
            </div>
        </div>
    );
};

export default page;