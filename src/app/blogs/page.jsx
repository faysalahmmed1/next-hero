"use client"
import Link from "next/link";

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


const page = () => {
    return (
        <div className="h-screen">
            <h1 className="text-center text-4xl">blogs</h1>
            {
                blogs.map((blog) => <div
                    className="border-2 p-12 bg-red-400"
                    key={blog.id}
                ><h1>No.{blog.id}</h1>
                    <h1>{blog.title}</h1>
                    <h3>{blog.description}</h3>
                    <button className="p-5 bg-black text-wrap mt-2 rounded-2xl"><Link href={`/blogs/${blog.id}`}>Views Details</Link></button>
                </div>)
            }
        </div>
    );
};

export default page;