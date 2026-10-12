import { toast } from "react-toastify";
import apiClient from "../webApi.js";

/** Helper to extract response error message */
const getErrorMessage = (error) => {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "An error occurred";
};

export async function getClientsList() {
    try {
        const response = await apiClient.post("/api/clients/list", {
            headers: {
                Accept: "application/json",
            },
        });
        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch clients list");
        }
        return response.data;
    } catch (error) {
        console.error("Get Clients List API Error:", getErrorMessage(error));
        throw error;
    }
}

export async function getServicesList() {
    try {
        const response = await apiClient.post("/api/services/list", {
            headers: {
                Accept: "application/json",
            },
        });

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch services list");
        }

        return response.data;
    } catch (error) {
        console.error("Get Services List API Error:", getErrorMessage(error));
        throw error;
    }
}