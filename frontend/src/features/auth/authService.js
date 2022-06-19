//@DESC HTTP request and sending data back

import axios from "axios";

const API_URL = "/api/user/";

// register user
/**
 * It takes in userData, sends it to the API, and if the response is successful, it stores the response
 * in localStorage.
 * @param userData - {
 * @returns The response.data is being returned.
 */
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};
const authService = { register, logout, login };
export default authService;
