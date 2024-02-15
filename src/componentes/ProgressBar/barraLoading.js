'use client'
import { usePathname } from 'next/navigation';
import style from './barraloading.module.css';
import { useState, useEffect } from 'react';

 const BarraLoading = () => {
  const [progresso, setProgresso] = useState(10);

  const path= usePathname()
 
  useEffect(() => {
    setProgresso(10)
    const intervalo = setInterval(()=>{
      setProgresso((prevProgresso)=>{
        if(prevProgresso < 100){
          return prevProgresso + 10
        }
      }
      );
    }, 180)

    return ()=>{
      clearInterval(intervalo)
    }
  }, [path]);

  return (
    
    (progresso < 100 && 
      <div className={style.barraProgresso}>
        <div className={style.carregandoBarra} style={{ width: `${progresso}%` }}></div>
      </div> 
    )

  );
}

export default BarraLoading
