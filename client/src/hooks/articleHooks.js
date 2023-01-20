import axios from 'axios';
import { toast } from 'react-toastify';
import { url, setHeaders } from "../api/index";

export const getArticles = async () => {
  try {
    const articles = await axios.get(`${url}/articles`, setHeaders());
    return articles;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const addArticle = async (article) => {
  try {
    const addedArticle = await axios.post(
      `${url}/articles`,
      article,
      setHeaders()
    );
    return addedArticle;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const updateArticle = async (updatedArticle, id) => {
  try {
    const article = await axios.put(
      `${url}/articles/${id}`,
      updatedArticle,
      setHeaders()
    );
    return article;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const deleteArticle = async (id) => {
  try {
    const article = await axios.delete(`${url}/articles/${id}`, setHeaders());
    return article;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}
