import { getPost } from "@/serviceApi/PostApi";
import Link from "next/link";

export const metadata = {
    title: {
        absolute: 'Post Page'
    },
    description: 'hello from post page'
}



const page = async () => {
    const Posts = await getPost();

    return (
        <div>
            <div className="grid grid-cols-3 gap-5 p-5">
                {
                    Posts?.slice(0, 20)?.map(({ id, title, body }) => (
                        <div
                            className="bg-red-600 rounded-lg p-4"
                            key={id}
                        >
                            <h1>{title}</h1>
                            <h1>{body}</h1>
                            <button
                                className="bg-blue-700  py-3 px-4 rounded"
                            ><Link href={`/posts/${id}`} >See Details</Link></button>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default page;