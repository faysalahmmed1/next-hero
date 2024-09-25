import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='bg-red-300'>
            <h1 className='text-center text-4xl text-red-800 py-6 '>Sign Up</h1>
            <div className='container mx-auto text-center justify-center'>
                <form>
                    <input 
                        type="name"
                        placeholder="your name"
                        className="input input-bordered input-warning w-full my-3 max-w-xs" />
                        <br />
                    <input 
                        type="email"
                        placeholder="email"
                        className="input input-bordered input-warning w-full my-3 max-w-xs" />
                    <br />
                    <input
                        type="password"
                        placeholder="your password"
                        className="input input-bordered input-warning w-full my-3 max-w-xs" />
                    <br />
                    <input
                        type="submit"

                        className="input input-bordered input-warning w-full my-5 max-w-xs" />

                </form>
            </div>
        <h1 className='text-center text-black font-semibold'>have an Accout? <Link className='text-error' href={'/login'}>login</Link></h1>
        </div>
    );
};

export default page;