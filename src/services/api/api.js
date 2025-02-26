import axios from "axios";

// Create an axios instance with custom configuration
 const api = axios.create({
  baseURL: "http://localhost:8000", // Replace with your API's base URL
  withCredentials: true, // Important to include credentials for cookies
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },  
});

export const login = async (email, password) => {
  await api.get(`/sanctum/csrf-cookie`, {
    withCredentials: true, // Important to include credentials for cookies
  });

  try {
    const response = await api.post(
      "/login",
      { email, password },
      {
        headers: { Accept: "application/json" },
        withCredentials: true,
        withXSRFToken: true,
      }
    );
    console.log(response.data)
  } catch (e) {
    console.log(e);
  }
};


export default api;