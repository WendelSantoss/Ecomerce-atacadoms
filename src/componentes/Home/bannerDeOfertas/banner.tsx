'use client';
import styles from './banner.module.css';
import SlideSwiper from './swiper';
import  {ofertas}  from './ofertasBanner';

export default function Banner() {
  
  return (
    <div className={styles.Banner}>
      <SlideSwiper info={ofertas} />
    </div>
  );
};

