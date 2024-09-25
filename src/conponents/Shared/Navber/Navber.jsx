"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const PathName = usePathname();
    const AllRouter = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Service',
            path: '/service'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        }
    ]
    return (
        <nav className=' container bg-blue-500 py-5 px-5 flex justify-between items-center'>
            <Link href={'/'}> <h1>Next Hero</h1></Link>

            <ul className='space-x-3'>
                {
                    AllRouter.map((router) => <Link
                    className={`${PathName === router.path && 'text-orange-900 hover:text-yellow-400'}`}
                        key={router.path}
                        href={router.path}
                    >{router.title}</Link>)
                }
            </ul>
        </nav>

    );
};

export default Navber;