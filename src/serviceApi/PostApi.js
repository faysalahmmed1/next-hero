
export const getPost = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await res.json();
    return data;
};

export const getPageDetalis = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
    const data = res.json();
    return data;
}