import axios from "axios";

// Use environment-driven API base URL in production, with a safe fallback for local/dev
const baseURL = import.meta.env.VITE_API_BASE_URL || "https://datatrack-az9f.onrender.com/api";

export const API = axios.create({
  baseURL
});
