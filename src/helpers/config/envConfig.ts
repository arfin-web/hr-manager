export const getBaseUrl = (): string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "https://hr-backend-chi.vercel.app/api/v1";
};

// http://localhost:3030/api/v1