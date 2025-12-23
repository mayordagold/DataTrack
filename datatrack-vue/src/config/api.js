import axios from "axios";

export const API = axios.create({
  baseURL: "https://datatrack-az9f.onrender.com/api"
});