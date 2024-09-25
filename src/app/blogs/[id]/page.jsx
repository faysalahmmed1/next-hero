"use client"
import React from 'react';

const page = ({ params }) => {
    const { title, description } = blogs.find((blog) => blog.id == params.id);
    return (
        <div className='h-screen container mx-auto my-12 p-12 bg-blue-50 text-black '>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    );
};


const blogs = [
    {
        "id": 1,
        "title": "Introduction to Next.js",
        "description": "This blog covers the basics of Next.js, how it differs from React.js, and why it's a great choice for building server-side rendered applications."
    },
    {
        "id": 2,
        "title": "Understanding TypeScript",
        "description": "In this article, we explore TypeScript, its key features, and how it enhances JavaScript development with static types and improved error handling."
    },
    {
        "id": 3,
        "title": "Building Responsive Web Pages with Tailwind CSS",
        "description": "Learn how to design fully responsive websites using Tailwind CSS, a utility-first framework, and how to customize components for different screen sizes."
    },
    {
        "id": 4,
        "title": "Deploying Applications with Vercel",
        "description": "This blog explains the step-by-step process of deploying your Next.js or other front-end applications to Vercel, including configuration tips and optimization strategies."
    },
    {
        "id": 5,
        "title": "Exploring MongoDB for Beginners",
        "description": "A beginner-friendly guide to MongoDB, covering the core concepts of NoSQL databases, how to set up MongoDB, and basic CRUD operations with MongoDB Atlas."
    }
];

export default page;