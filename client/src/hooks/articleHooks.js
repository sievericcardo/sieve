import axios from 'axios';
import { toast } from 'react-toastify';
import { url, setHeaders } from "../api/index";

export const getArticles = async () => {
  try {
    const articles = await axios.get(`${url}/articles`, setHeaders());
    return articles.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const getArticle = async (id) => {
  try {
    const article = await axios.get(`${url}/articles/${id}`, setHeaders());
    return article.data;
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
};

export const addArticle = async (article) => {
  try {
    await axios.post(
      `${url}/articles`,
      article,
      setHeaders()
    )
    .then (() => {
      toast.success("The article was added", {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      return true;
    })
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const updateArticle = async (updatedArticle, id) => {
  try {
    await axios.put(
      `${url}/articles/${id}`,
      updatedArticle,
      setHeaders()
    )
    .then (() => {
      toast.success("The article was updated", {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      return true;
    });
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}

export const deleteArticle = async (id) => {
  try {
    await axios.delete(`${url}/articles/${id}`, setHeaders())
    .then (() => {
      toast.success("The article was deleted", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      return true;
    });
  } catch (error) {
    toast.error(error.response?.data, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }
}
