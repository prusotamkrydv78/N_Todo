
const getUser = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-user`);
        const data = await res.json();
        return data; 
};

export default getUser;
