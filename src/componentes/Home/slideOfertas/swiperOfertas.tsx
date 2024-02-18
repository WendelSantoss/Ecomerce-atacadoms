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
        let cardsToShow = 4; // Valor padrão para a quantidade de cards a serem exibidos.
        
        if (width < 541) {
          cardsToShow = 1;
        } else if (width < 832) {
          cardsToShow = 2;
        } else if (width < 1102) {
          cardsToShow = 3;
        }// Lógica para determinar a quantidade de cards a serem mostrados com base na largura.
        setCardsOn(cardsToShow);
      }
    }// Funcao para atualizar o estado com a quantidade de cards a serem exibidos.

    const resizeObserver = new ResizeObserver(resizeObserverCallback);
    // Criação de uma instância do ResizeObserver com a função de callback definida.
    
    const currentRef = swiperRef.current;
    // Obtém o valor atual do ref para evitar problemas com a dependência.
    
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }// Se o ref existir, observa mudanças no tamanho do elemento Swiper.
    
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }// Função de limpeza do efeito: remove a observação quando o componente é desmontado.
    };
  }, [swiperRef]); // UseEffect sendo ativado qnd temos mudanças na alteração da tela.

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
/*Neste componente vale ressaltar a utilização do Ref para observar apenas de certa parte do componente 
e não de toda a janela. Esse metodo foi de extrema importancia para melhora da performance em eventos 
de redimensionamentos de tela.*/


