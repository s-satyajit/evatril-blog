import { useEffect, useState } from "react";

const useBlogs = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchApi = async () => {
        try {
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [url]);

    return { data, loading };
};

export default useBlogs;