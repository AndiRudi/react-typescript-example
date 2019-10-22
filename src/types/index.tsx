/** This is the global state used in our application */
export interface IApplicationState {
    language: string;
    country: string;
    challenges: any;
    pledges: any;
       auth: {
        authenticated: boolean;
        username?: string;
    };
}