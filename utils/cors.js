import cors from "cors"
export const corsMiddleware = cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Define all the allowed methods
    origin: '*', // Allow requests from any origin, you can specify specific origins if needed
  });
  