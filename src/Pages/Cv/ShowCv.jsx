import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiRoute } from "../../Utils/Route/ApiRoute.js";
import CvTemplate from "../../Components/Cv/CvTemplate.jsx";
import LoaderSpinner from "../../Components/Misc/LoaderSpinner.jsx";

function ShowCv() {
    const { cvId } = useParams();
    const [cvData, setCvData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(getApiRoute(`cv/${cvId}`), {})
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch CV data");
                }
                return response.json();
            })
            .then((data) => {
                setCvData(data.cv);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [cvId]);

    if (loading) {
        return <LoaderSpinner />;
    }

    if (error) {
        
    }

    console.log(cvData);

    return <CvTemplate cv={cvData} />;
}

export default ShowCv;
