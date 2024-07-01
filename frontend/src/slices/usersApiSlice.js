import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ //Send request to backend and accept the cookie
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: "POST",
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/`,
                method: "POST",
                body: data,
            }),
         }),//Send request to backend and accept the cookie
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: "POST",//This is for the server
            }),
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: "PUT",
                body: data,
            }),
        }),
    }),
});

export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation, 
    useProfileMutation 
} = usersApiSlice;