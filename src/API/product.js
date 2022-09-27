import axios from "axios";

const productURL = "https://hatlyback.herokuapp.com/api/";

export const fetchProduct = axios.create({
  baseURL: productURL,
});
