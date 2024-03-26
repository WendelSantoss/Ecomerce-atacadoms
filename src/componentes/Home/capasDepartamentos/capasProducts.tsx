'use client'
import Image from 'next/image';
import styles from './capasProducts.module.css';
import { capasImages } from './images';
import Link from 'next/link';
import { BuscaDoProduto } from '@/componentes/Produtos/hooksParaBuscardados-context/ContextoPageControlDados';
import { useContext } from 'react';

export default function CapasProducts() {

  const {abaixo10, blush, natural}= useContext(BuscaDoProduto)

  return (
    <div className={styles.boxProducts}>
  
      {capasImages.map((item) =>{
        const setPagePorCapa= ()=>{
          if(item.id === '1'){
            abaixo10()
          }else if(item.id === '2'){
            natural()
          }else{
            blush()
          }
        }
        return(
          <div className={styles.capas} key={item.id}>
            
            <Link onClick={setPagePorCapa} href='/produtos'><Image src={item.picture} alt='Capas de Produtos'></Image></Link>
          
          </div>
        )
      })}
  
    </div>  
  );
};

