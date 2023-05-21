import * as jwt from "jsonwebtoken";

export interface AuthTokenPayload { 
    userId: number;
}

export const  decodeAuthHeader = (authHeader: String): AuthTokenPayload => { 
    const token = authHeader.split(' ')[1];

    if (!token) {
        throw new Error("No token found");
    }
    return jwt.verify(token, process.env.TOP_SECRET as jwt.Secret) as AuthTokenPayload; 
}