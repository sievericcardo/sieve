import axios from "axios";
import { toast } from 'react-toastify';
import { url } from "../api/index";

export const signUp = async (user) => {
  try {
    const response = await axios.post(`${url}/signup`, user);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", user.name);
    localStorage.setItem("avatar", response.data.image);
    return true;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const signIn = async (user) => {
  try {
    const response = await axios.post(`${url}/signin`, user);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", user.name);
    localStorage.setItem("avatar", response.data.image);
    return;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};
