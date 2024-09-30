import React from 'react';

const login = () => {
    return (
        <div className='h-screen'>
            <h1> login</h1>
            <form>
                <input type="text" name='email' placeholder='your email' />
                <input type="text" name='password' placeholder='your email' />
                <input type='submit' />
            </form>
        </div>
    );
};

export default login;