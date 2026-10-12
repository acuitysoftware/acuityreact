import apiClient from "./webApi.js";

const getErrorMessage = (error) => {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "An error occurred";
};

export async function getSiteSettings() {
    try {
        const response = await apiClient.post(
            "/api/get-site-settings",
            {},
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch site settings");
        }
        
        return response.data;
    } catch (error) {
        console.error("Get Site Settings API Error:", getErrorMessage(error));
        throw error;
    }
}