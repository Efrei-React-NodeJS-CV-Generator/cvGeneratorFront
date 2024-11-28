import { GetAuthenticatedUserId, GetAuthenticatedUserToken} from "../../../Utils/Security/AuthorizationHelper";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getApiRoute } from "../../../Utils/Route/ApiRoute";
import ProfileShow from "./DisplayMode/ProfileShow";
import ProfileEdit from "./DisplayMode/ProfileEdit";



const UserProfile = ({ isEditMode }) => {
    const userId = GetAuthenticatedUserId();
    const userToken = GetAuthenticatedUserToken();

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/profile/edit`);
    };

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
                setUserData(data);
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
        <div className="container mt-3 w-50">
            <h1 className="mb-4 text-center">
                {isEditMode ? "Modifier son profil" : "Page de profil"}
            </h1>
            {userData && (
                <div className="card card-profil border-0">
                <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                    <img 
                        src={userData.profilePicture || "https://via.placeholder.com/150"} 
                        alt="Photo de profil" 
                        className="rounded-circle me-3" 
                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    />
                    <div>
                        {/* <h5 className="card-title mb-1">{userData.name || "Nom d'utilisateur"}</h5> */}
                        <p className="text-muted mb-0">{userData.email || "Email non disponible"}</p>
                    </div>
                    </div>
                    <hr />
                    {isEditMode ? (
                    <ProfileEdit 
                        userData={userData} 
                        userId={userId} 
                        userToken={userToken} 
                    />
                    ) : (
                    <ProfileShow userData={userData} />
                    )}
                    <div className="d-flex justify-content-end mt-4">
                    </div>
                </div>
                </div>
            )}
        </div>

    );
};

UserProfile.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
};

export default UserProfile;
