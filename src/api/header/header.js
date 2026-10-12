import apiClient from "../webApi.js";

const getErrorMessage = (error) => {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "An error occurred";
};

export async function getHeaderList() {
    try {
        const response = await apiClient.post("/api/header-menus/list", {
            headers: {
                Accept: "application/json",
            },
        });
        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch header menu");
        }
        return response.data;
    } catch (error) {
        console.error("Get Header List API Error:", getErrorMessage(error));
        throw error;
    }
}