/**
 * CDS Widget API Configuration
 * 
 * Store your CDS API key here or use environment variables
 */

// Get API key from environment variable (recommended for production)
export const CDS_API_KEY = import.meta.env.VITE_CDS_API_KEY || "abcd-1234-cdsapikey";

// CDS API Base URL
export const CDS_API_BASE = "https://cdsapp-interchange.azurewebsites.net";

// Generate unique GUID for each user session
export const generateUserGUID = () => {
    return `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Helper to check if API key is configured
export const isCDSConfigured = () => {
    return CDS_API_KEY && CDS_API_KEY !== "abcd-1234-cdsapikey";
};
