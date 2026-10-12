import apiClient from "./webApi.js";

const getErrorMessage = (error) => {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message ?? "An error occurred";
};

export async function submitContactForm({ name, email, phone, message }) {
    try {
        const response = await apiClient.post(
            "/api/contact-form-submit", 
            {
                name,
                email,
                phone,
                message
            },
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        );

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to submit contact form");
        }
        
        return response.data;
    } catch (error) {
        console.error("Submit Contact Form API Error:", getErrorMessage(error));
        throw error;
    }
}