import axios from 'axios';

//base URL = https://sujeitoprogramador.com/
//r-api/?api=filmes/ (TODOS OS FILMES)
//r-api/?api=filmes/123 (FILME COM ID)


const api =axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;