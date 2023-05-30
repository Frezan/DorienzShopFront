import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
const url = process.env.REACT_APP_URl;
import { login } from "../../services/service/auth/authService.service";
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext({});

export const AuthContextProvider = ({ children }: any) => {

    const [cookiesToken] = useCookies(['token']);

    if (cookiesToken.token) {
        let decoded: any = jwt_decode(cookiesToken.token);
        const [user, setUser] = useState<any>(decoded);

        return (
            <>
                <AuthContext.Provider value={{ user, setUser }}>
                    {children}
                </AuthContext.Provider>
            </>
        );
    }
    else {
        const [user, setUser] = useState<any>();
        return (
            <>
                <AuthContext.Provider value={{ user, setUser }}>
                    {children}
                </AuthContext.Provider>
            </>
        );
    }




};

export default AuthContext;