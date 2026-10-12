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

export async function getSolutionsList() {
    try {
        const response = await apiClient.post("/api/our-solutions/list", {
            headers: {
                Accept: "application/json",
            },
        });

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch solutions list");
        }

        return response.data;
    } catch (error) {
        console.error("Get Solutions List API Error:", getErrorMessage(error));
        throw error;
    }
}

export async function getTechnologiesList() {
    try {
        const response = await apiClient.post("/api/technology/list", {
            headers: {
                Accept: "application/json",
            },
        });

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch technologies list");
        }

        return response.data;
    } catch (error) {
        console.error("Get Technologies List API Error:", getErrorMessage(error));
        throw error;
    }
}

export async function getProjectsList() {
    try {
        const response = await apiClient.post("/api/projects/list", {
            headers: {
                Accept: "application/json",
            },
        });

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch projects list");
        }
        return response.data;
    } catch (error) {
        console.error("Get Projects List API Error:", getErrorMessage(error));
        throw error;
    }
}

export async function getIndustriesList() {
    try {
        const response = await apiClient.post("/api/industry/list", {
            headers: {
                Accept: "application/json",
            },
        });

        if (response.data && response.data.status === false) {
            throw new Error(response.data.message || "Failed to fetch industries list");
        }

        return response.data;
    } catch (error) {
        console.error("Get Industries List API Error:", getErrorMessage(error));
        throw error;
    }
}

export async function getTestimonialsList() {
  try {
    const response = await apiClient.post("/api/testimonials/list", {
      headers: {
        Accept: "application/json",
      },
    });
    if (response.data && response.data.status === false) {
      throw new Error(response.data.message || "Failed to fetch testimonials list");
    }
    return response.data;
  } catch (error) {
    console.error("Get Testimonials List API Error:", getErrorMessage(error));
    throw error;
  }
}