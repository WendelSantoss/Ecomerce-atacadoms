import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

register();

export default function SlideSwiper(props: any) {

  const info = props.info
    
    return(
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
          autoplay={{delay: 2500, disableOnInteraction: false}}
        >
          {info.map((dados:any) => (
            <SwiperSlide key={dados.id}>
              <Link href='/produtos'><Image src={dados.picture} alt='Ofertas Images'></Image></Link>
            </SwiperSlide>
          )
          )}
        </Swiper>
    )
}
