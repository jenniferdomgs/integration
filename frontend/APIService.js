// onde fica as requisições

import axios from "axios";

const API_URL = process.env;REACT_APP_API_URL; // pega a url do meu .env

export async function getFunction() {
    const response = await axios.get(`$(API_URL)/`)
    return response.data;
}