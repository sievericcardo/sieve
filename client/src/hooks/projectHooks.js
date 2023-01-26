import axios from 'axios';
import { toast } from 'react-toastify';
import { url, setHeaders } from "../api/index";

export const getProjects = async () => {
  try {
    const projects = await axios.get(`${url}/projects`);
    return projects.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const getProject = async (id) => {
  try {
    const project = await axios.get(`${url}/projects/${id}`);
    return project.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const addProject = async (project) => {
  try {
    await axios.post(
      `${url}/projects`,
      project,
      setHeaders()
    );
    return true;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const updateProject = async (updatedProject, id) => {
  try {
    const project = await axios.put(
      `${url}/projects/${id}`,
      updatedProject,
      setHeaders()
    );
    return project.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const deleteProject = async (id) => {
  try {
    const project = await axios.delete(`${url}/projects/${id}`, setHeaders());
    return project.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}
