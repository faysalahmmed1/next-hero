'use client'
import { useEffect, useState } from "react";


const MealsDB = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const LoadData = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = res.json();
        setMeals(data.meals);
    }

    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
    };
    useEffect(() => {
        LoadData();
    }, [search])

    return (
        <div>
            <input
                onChange={handleInput}
                className='text-amber-100 p-4 mt-3 border-none outline-none'
                type="text"
                placeholder='search' />
            <button className='p-4 bg-red-600'>Search</button>
        </div>
    );
};

export default MealsDB;