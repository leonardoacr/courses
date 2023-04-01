import { SessionData } from "express-session";

export interface CustomSessionData extends SessionData {
    authorization?: any;
}

declare module 'express-session' {
    export interface Session extends CustomSessionData { }
}

declare module 'express' {
    export interface Request {
        user?: any;
    }
}
