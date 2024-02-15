'use client'
import { Info } from '@/componentes/interfaces/InfoInterfaceDados';
import { useState, useEffect } from 'react';

export default function useSearch() {

  const [dados, setDados] = useState<Info[]>([]);
  //estado para armazenar todos os dados da api.
  const [pesquisa, setPesquisa] = useState('');
  // estado para armazenar pesquisa do cliente.
  const [DadosFiltrados, setDadosFiltrados] = useState<Info[]>([])
  // estado para armazenar dados filtrados da pesquisa do cliente.
  const [loading, setLoading]= useState<boolean>(true)
  // estado para costumização e melhora da experiencia do usuario no carregar dos dados.

  useEffect(() => {
    setLoading(true)

    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    .then(response => response.json())
    .then(data => {
      setDados(data)
      setLoading(false)
    })
    .catch(error => {
        console.error('Erro na requisição:', error)
        return(
            <div>
                <p>Ocorreu um erro ao buscar os dados.</p>
                <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
            </div>
        )
    });
  }, []);
  // Fetch na API para obter todos os produtos afim de filtra-los.

  useEffect(()=>{

    const filtrados = dados.filter(item => {
      return item.name.toLowerCase().includes(pesquisa.toLowerCase());
    }); 
    
    setDadosFiltrados(filtrados)
   
    // Filtrar produtos com base na consulta de pesquisa
  },[dados,pesquisa])
  // novo useEffect afim de n gerar um novo fetch desnecesssário de dados.

  return{
    DadosFiltrados,
    setPesquisa,
    loading
  }
}