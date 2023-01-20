import axios from "axios";
import { toast } from 'react-toastify';
import { url } from "../api/index";

export const signUp = async (user) => {
  try {
    const response = await axios.post(`${url}/signup`, user);
    localStorage.setItem("token", response.data);
    localStorage.setItem("user", user.name);
    return response;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const signIn = async (user) => {
  try {
    const response = await axios.post(`${url}/signin`, user);
    localStorage.setItem("token", response.data);
    localStorage.setItem("user", user.name);
    return;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
