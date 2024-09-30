import { getPageDetalis } from "@/serviceApi/PostApi";

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${params.id}`)
    const PostData = await res.json();
    return {
        title: {
            default: 'Post Page',
            absolute: `${PostData.title}`
        },
        description: PostData.body,
        keyword: PostData.body.split(' ')
    }
}

const DetailsPage = async ({ params }) => {
    const { title, body } = await getPageDetalis(params.id)

    return (
        <div className='container mx-auto'>
            <div className='bg-red-500 p-5 mt-5 mx-auto max-w-2xl shadow-lg'>
                <h1>Title: {title}</h1>
                <h1>Description: {body}</h1>
            </div>
        </div>
    );
};

export default DetailsPage;