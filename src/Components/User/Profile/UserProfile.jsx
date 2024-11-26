import { GetAuthenticatedUserId, GetAuthenticatedUserToken} from "../../../Utils/Security/AuthorizationHelper";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getApiRoute } from "../../../Utils/Route/ApiRoute";



const UserProfile = ({ isEditMode }) => {
    const userId = GetAuthenticatedUserId();
    const userToken = GetAuthenticatedUserToken();

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(getApiRoute(`user/${userId}`), {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    // setError("Une erreur est survenue lors de la récupération des informations");
                    // setLoading(false);
                }
                return response.json();
            })
            .then((data) => {
                // setUserData(data);
                // setLoading(false);
            })
            .catch(() => {
                // setError("Une erreur critique est survenue lors de la récupération des informations");
                // setLoading(false);
            });
    }, [userId, userToken]);

    if (error) {
        // console.error(error);
    }

    return (
        <div className="container mt-5">
            {userId}
            {/* <h1 className="mb-4">{isEditMode ? "Modifier son profil" : "Page de profil"}</h1>
            {userData && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Mon profil</h5>
                        {isEditMode ? <ProfileEdit userData={userData} userId={userId} userToken={userToken} /> : <ProfileShow userData={userData} />}
                    </div>
                </div>
            )} */}
        </div>
    );
};

UserProfile.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
};

export default UserProfile;
