import AboutContents from '@/components/AboutContents/AboutContents';
import React from 'react';
import { Roboto } from 'next/font/google';
const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })


export const metadata = {
    title: 'About',
    description: "About Page",
};


const getTime = async () => {
    const res = await fetch('http://localhost:3000/time', { next: { revalidate: 5 } });
    const data = await res.json();
    return data.currentTime;
}

const page = () => {
    const currentTime = getTime();
    return (
        <div className={`${roboto.className} text-center text-5xl`}>
            <h1>About</h1>
            <h1 className='text-white text-6xl'>Time: {currentTime}</h1>
            {/* <AboutContents /> */}
        </div>
    );
};

export default page;