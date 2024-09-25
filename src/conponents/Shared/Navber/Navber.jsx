"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { MdDashboard } from "react-icons/md";

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
        },
        {
            title: 'Blogs',
            path: 'blogs'
        }
    ];
    const loginHandler = () => {
        router.push('/login')
    }
    if (PathName.includes('deshboard'))
        return (
            <div className='bg-green-400 my-4 p-4'>
                deshboard layout
            </div>
        )
    return (
        <nav className=' container bg-blue-500 py-5 px-5 flex justify-between items-center'>
            <div className='flex space-x-3'>
                <Link className='text-3xl' href={'/deshboard'}><MdDashboard /></Link>
                <Link href={'/'}>
                    <h1>Next Hero !</h1>
                </Link>
            </div>

            <div>
                <ul className='space-x-3'>
                    {
                        AllRouter.map((router) => <Link
                            className={`${PathName === router.path && 'text-orange-900 hover:text-yellow-400'}`}
                            key={router.path}
                            href={router.path}
                        >{router.title}</Link>)
                    }
                </ul>
            </div>
            <div>
                <button onClick={loginHandler} className='bg-red-700 rounded-2xl text-wrap p-4'>Login</button>
            </div>
        </nav>

    );
};

export default Navber;