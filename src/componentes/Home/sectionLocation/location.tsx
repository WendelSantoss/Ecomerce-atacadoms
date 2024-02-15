import Image from 'next/image';
import styles from './location.module.css';
import Map from './Mapa.png'


export default function Location() {
  return (
    <div className={styles.adress}>
       
              <div className={styles.boxAdress}>
                  <h2>Endereço e contato</h2>
                  <p>Av. Francisco Marquês da Fonseca - Brasília, Bayeux - PB, <br/> CEP: 58110-435.</p>
                  <p>Whats para Duvidas: (83)888888888</p>
              </div>
              <div className={styles.locationMap}>
                <div className={styles.boxMap}>
                  <a href='https://www.google.com/maps/place/Ms+Atacado+de+Maquiagem/@-7.1298765,-34.9372571,17z/data=!3m1!4b1!4m6!3m5!1s0x7ace9101fde5bb1:0xb35e4f1b3b9b2977!8m2!3d-7.1298818!4d-34.9346768!16s%2Fg%2F11vf41_5m5?entry=ttu'
                    target='_blank'>
                      <Image src={Map} alt='endereçoImage'></Image>
                  </a>
                </div>
              </div>
       
    </div>

    
  );
};
