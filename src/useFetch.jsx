import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () =>{
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (response.ok) {
                    setData(Array.isArray(result.data) ? result.data : []);
                } else {
                    setError(result.message || "Error fetching data");
                    setData([]);
                }
            } catch (error) {
                setError(result.message || "Error fetching data");
                setData([]);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [url]);
    return { data, isloading, error };
}

export { useFetch };