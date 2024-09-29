import { getPageDetalis } from "@/serviceApi/PostApi";

const DetailsPage = async ({ params }) => {
    const { title, body }= await getPageDetalis(params.id)

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