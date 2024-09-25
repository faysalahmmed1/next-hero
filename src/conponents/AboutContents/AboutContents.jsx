import Link from 'next/link';
import React from 'react';

const AboutContents = () => {
    return (
        <div className='text-center space-x-3 flex'> 
            <Link href={'/about/history'}> history</Link>
            <Link href={'/about/mission'}> Mission</Link>
        </div>
    );
};

export default AboutContents;