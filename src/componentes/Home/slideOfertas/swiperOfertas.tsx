import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState, useRef } from "react";
import CardItens from './CardItensPagePrincipal';
import { Info } from '@/componentes/interfaces/InfoInterfaceDados';

register();

interface SlidePromoProps {
  estado?: string
  informacao: Info[];
}

export default function SlidePromo({ informacao, estado }: SlidePromoProps) {
  const [cardsOn, setCardsOn] = useState(4);
  //estado para guardar a quantidade de cards vao ser mostrados pelo swiper
  
  const swiperRef = useRef<any>(''); //Referência para o elemento Swiper

  useEffect(() => {
    
    function resizeObserverCallback(entries: ResizeObserverEntry[]) {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        let cardsToShow = 4; // Valor padrão já alocado no estado cardson
        
        if(width < 541){
          cardsToShow = 1;
        }else if(width < 832){
          cardsToShow = 2;
        }else if(width < 1102){
          cardsToShow = 3;}

        setCardsOn(cardsToShow);
      }
    }//Função chamada quando há mudanças no tamanho do elemento Swiper

    const resizeObserver = new ResizeObserver(resizeObserverCallback);
    if (swiperRef.current) {
      resizeObserver.observe(swiperRef.current);
    } // Cria um novo ResizeObserver e observa mudanças no tamanho do elemento Swiper

    return () => {
      if (swiperRef.current) {
        resizeObserver.unobserve(swiperRef.current);
      } // Remove a observação quando o componente é desmontado
    };
  }, []);

    return(
        <Swiper ref={swiperRef}
          slidesPerView={cardsOn}
          navigation
          autoplay={{delay: 5000, disableOnInteraction: false}}
        >
          {informacao.map((itens) =>(
            <SwiperSlide key={itens.id}>
              
              <CardItens dados={itens} categoriaDados={estado}/>
              
            </SwiperSlide>
          )
          )}
        </Swiper>
    )
}




