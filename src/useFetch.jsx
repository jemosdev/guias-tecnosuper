import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                const contentType = response.headers.get("content-type");
                let result;

                try {
                    result = await response.json();
                } catch (jsonError) {
                    const text = await response.text();
                    setError(`Expected JSON, but got HTML: ${text.substring(0, 200)}`);
                    setData([]);
                    setLoading(false);
                    return;
                }
                if (response.ok) {
                    setData(result.data || []);
                } else {
                    setError(error.message || "Error fetching data");
                    setData([]);
                }
            } catch (error) {
                setError(error.message || "Error fetching data");
                setData([]);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export { useFetch };