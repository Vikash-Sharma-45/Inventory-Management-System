import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import reducer from ".";

export const api = createApi({
    baseQuery : fetchBaseQuery({ baseUrl: "process.env.NEXT_PUBLIC_API_URL" }),
    reducerPath: "api",
    endpoints: (build) => (
        {
            
        }
    ),
});

export const {} = api;