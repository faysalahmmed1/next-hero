"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navber = () => {
    const PathName = usePathname();
    const router = useRouter();
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
    ];
    const loginHandler = () => {
        router.push('/login')
    }
    return (
        <nav className=' container bg-blue-500 py-5 px-5 flex justify-between items-center'>
            <Link href={'/'}>
                <h1>Next Hero !</h1>
            </Link>

            <ul className='space-x-3'>
                {
                    AllRouter.map((router) => <Link
                        className={`${PathName === router.path && 'text-orange-900 hover:text-yellow-400'}`}
                        key={router.path}
                        href={router.path}
                    >{router.title}</Link>)
                }
            </ul>
            <button onClick={loginHandler} className='bg-red-700 rounded-2xl text-wrap p-4'>Login</button>
        </nav>

    );
};

export default Navber;