import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    tagTypes: ["User"],
    baseQuery: fetchBaseQuery({baseUrl: 'http://ec2-16-16-62-60.eu-north-1.compute.amazonaws.com/', credentials: "include" }),
    endpoints: (builder) => ({})
});

