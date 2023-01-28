import axios from "axios";
import { toast } from 'react-toastify';
import { url, setHeaders } from "../api/index";

export const getMedias = async () => {
  try {
    const medias = await axios.get(`${url}/medias`);
    return medias.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const getMedia = async (id) => {
  try {
    const media = await axios.get(`${url}/medias/${id}`);
    return media.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const addMedia = async (media) => {
  try {
    await axios.post(
      `${url}/medias`,
      media,
      setHeaders(),
    )
    .then (() => {
      toast.success("Media added successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
        });
    });
    return true;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const updateMedia = async (updatedMedia, id) => {
  try {
    const media = await axios.put(
      `${url}/medias/${id}`,
      updatedMedia,
      setHeaders(),
    )
    .then (() => {
      toast.success("Media updated successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
    return media.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const deleteMedia = async (id) => {
  try {
    await axios.delete(
      `${url}/medias/${id}`,
      setHeaders()
    )
    .then (() => {
      toast.success("Media deleted successfully", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
    return true;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}
