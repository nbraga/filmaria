import "./filme-info.css";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import api from "../../services/api";

import {toast} from 'react-toastify';

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        //Tentou navegar com um id que não existe
        history.replace("/");
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }
    loadFilme();

    return () => {
      //componente desmontado
    };
  }, [history, id]);

  function salvaFilme(){
    const minhaLista = localStorage.getItem('filmes');

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const temFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

    if (temFilme){
        toast.error('Você já possui esse filme salvo...');
        return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
    toast.success('Filme Salvo com sucesso');
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu fime...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
      <img src={filme.foto} alt={filme.nome} />

      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
