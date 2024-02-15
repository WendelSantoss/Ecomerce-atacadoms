'use client'
import styles from './ofertasSwiperCards.module.css';
import SlidePromo from './swiperOfertas';
import { useState, useEffect } from 'react';
import Loader from '@/componentes/LoaderPadrao/Loader';
import { Info } from '@/componentes/interfaces/InfoInterfaceDados';

export default function Ofertas() {
  const [veganoDados, setVeganoDados] = useState<Info[]>([]);
  const [abaixo10Dados, setAbaixo10Dados] = useState<Info[]>([]);
  //estados para guardar os dados dos produtos
  
  const [loading, setLoading]= useState(true)
  // estado para carregamento de dados com loader

  useEffect(() => {
    setLoading(true)
    async function fetchDados() {
      try {
         // Chamada de API para produtos veganos 
        const maybellineResponse = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=vegan`);
        const maybellineData = await maybellineResponse.json();
        setVeganoDados(maybellineData);
          
        // Chamada de API para produtos abaixo de $10
        const abaixo10Response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=10`);
        const abaixo10Data = await abaixo10Response.json();
        setAbaixo10Dados(abaixo10Data);

        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        return(
          <div>
            <p>Ocorreu um erro ao buscar os dados.</p>
            <p>Por favor, verifique sua conexão com a internet e tente novamente.</p>
          </div>
        )
      }
    }

    fetchDados();
  }, []);

  return (
    <div className={styles.ofertasSection}>
      <div className={styles.marcas}>
        <h1>Produtos do tipo Vegano para você!</h1>

        {(loading)?
            <div className={styles.carregamento}>
              <Loader loading={loading}/>
            </div>
          :
            <SlidePromo informacao={veganoDados} estado='product_tags=vegan'/>
        }

      </div>
      
      <div className={styles.onSales}>
        <h1>Promoções abaixo dos $10,00.</h1>

        {(loading)?
          <div className={styles.carregamento}>
            <Loader loading={loading}/>
          </div>
          :
          <SlidePromo informacao={abaixo10Dados} estado='price_less_than=10'/>
        }

      </div>
    </div>
  );
}