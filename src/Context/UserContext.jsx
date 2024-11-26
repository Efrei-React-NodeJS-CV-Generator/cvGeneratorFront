import { createContext, useState } from "react";
import PropTypes from "prop-types";


export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (loginInfos) => {
        setUser(loginInfos);
        localStorage.setItem('user', JSON.stringify(loginInfos));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        window.location.href = '/';
    }

    const getUserInfos = () => {
        if (user) {
            return user;
        } else {
            const storeUser = localStorage.getItem("user");
            if (storeUser && storeUser !== "undefined") {
                setUser(JSON.parse(storeUser));
                return storeUser;
            }
        }
    };

    return <UserContext.Provider value={{ login, getUserInfos, logout }}>{children}</UserContext.Provider>;

};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { UserProvider };