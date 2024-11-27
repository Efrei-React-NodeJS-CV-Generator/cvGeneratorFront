import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import DetailRow from "../DetailRow";

const ProfileShow = ({ userData }) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/profile/edit`);
    };

    return (
        <>
            <DetailRow title="Email" content={userData.email} />
            <DetailRow title="Nom" content={userData.nom} />
            <DetailRow title="Prénom" content={userData.prenom} />
            <button className="btn btn-primary" onClick={handleEdit}>
                Modifier
            </button>
        </>
    );
};

ProfileShow.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default ProfileShow;
