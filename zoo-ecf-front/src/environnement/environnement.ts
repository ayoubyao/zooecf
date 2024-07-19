const isProd: boolean = process.env.NODE_ENV === "production";

export const environment = {

    production: true,
    apiUrl: isProd ? process.env.API_URL : "http://localhost:3010"
};