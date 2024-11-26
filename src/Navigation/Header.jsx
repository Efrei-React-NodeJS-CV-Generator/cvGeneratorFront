import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';

function Header() {
    const { getUserInfos, logout } = useContext(UserContext);
    const user = getUserInfos();
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    CV Generator
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Tous les CV</Link>
                        </li>

                        {user && <li className="nav-item">
                            <Link className="nav-link" to="/my-cv">Voir mon CV</Link>
                        </li>}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {user ? 
                        <li className="nav-item"><Link className="nav-link" to="/profile">Voir mon profil</Link></li> : 
                        <li className="nav-item"><Link className="nav-link" to="/register">S'enregistrer</Link></li>}

                        {user ? (
                            <li>
                                <span role="button" className="nav-link" onClick={logout}>
                                    Déconnexion
                                </span>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Se connecter</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;