import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    return { data }
}

export { useFetch };