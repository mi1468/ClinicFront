// auth.ts
import axios from "axios";

export const API_URL = "http://localhost:8000";

 

export async function checkTokenAndRedirectDashboard(): Promise<void> {
  const TOKEN_KEY = "token";
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    // Token not found, redirect to login
    window.location.href = "/login";
    return;
  }

  try {
    const response = await axios.get(`${API_URL}/getInfo`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    // User authorized, redirect to dashboard
    // window.location.href = "/dashboard";
  } catch (error) {
    // If unauthorized, remove token and redirect to login
    localStorage.removeItem(TOKEN_KEY);
    window.location.href = "/login";
  }
}

export async function checkTokenAndRedirectLogin(): Promise<void> {
  const TOKEN_KEY = "token";
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    // Token not found, redirect to login
    // window.location.href = "/login";
    return;
  }

  try {
    const response = await axios.get(`${API_URL}/getInfo`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    // User authorized, redirect to dashboard
    window.location.href = "/dashboard";
  } catch (error) {
    // If unauthorized, remove token and redirect to login
    localStorage.removeItem(TOKEN_KEY);
    // window.location.href = "/login";
  }
}
