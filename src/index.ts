/*
Author: Luca Scaringella
GitHub: LucaCode
Copyright(c) Luca Scaringella
 */

export const enum InternalServerProcedures {
    Publish = '#0',
    Subscribe = '#1',
    Authenticate = '#2'
}

export const enum InternalServerReceivers {
    Publish = '#0',
    Unsubscribe = '#1',
    Deauthenticate = '#2',
}

export const enum InternalServerTransmits {
    ConnectionReady = '#',
    Publish = '#0',
    SetAuthToken = '#1',
    RemoveAuthToken = '#2',
    KickOut = '#3',
}