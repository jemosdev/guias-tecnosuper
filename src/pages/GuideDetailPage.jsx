/* import React, { useState, useEffect } from 'react';*/
import React from "react";
import { Topbar } from "../components/Topbar/Topbar";
import { useParams } from "react-router-dom";

function GuideDetailPage() {
    //useParams return all parameters available of the specific page
    const params = useParams();
    console.log(params);
    return(
        <div>
            <Topbar />
            <h1>Guides of cards</h1>
        </div>
    );
}

export { GuideDetailPage };

/* function GuideDetailPage() {
    const { code } = useParams();
    const [guide, setGuide] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGuide = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`https://nexyapp-f3a65a020e2a.herokuapp.com/zoho/v1/console/tecnoGuides/${code}`);
                const data = await response.json();
                setGuide(data);
                setIsLoading(false);
            } catch (err) {
                setError('Failed to fetch guide');
                setIsLoading(false);
            }
        };

        fetchGuide();
    }, [code]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!guide) return <p>No guide found!</p>;

    return (
        <div>
            <h1>{guide.title}</h1>
            <img src={guide.imageUrl} alt={guide.title} />
            <p>{guide.description}</p>
        </div>
    );
} */

