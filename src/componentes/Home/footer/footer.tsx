import Image from 'next/image';
import styles from  './footer.module.css';
import Cards from './imagesFooter/Cards.jpg';
import WhatsIcon from './imagesFooter/WhatsIcon.png';
import InstagranIcon from './imagesFooter/InstagranIcon.png';
import Link from 'next/link';

export default function Footer() {
  return (
        <footer className={styles.footer}>
            <div className='center'>

                <div className={styles.footerWhats}>
                    <h2>Grupo com atualizações de estoques:</h2>
                    <Link href='https://chat.whatsapp.com/CotIHtV3tBw54ZZxSq001e' target='_blank'>Grupo Whats <Image src={WhatsIcon} alt='iconWhats'></Image></Link>  
                </div>
     
                <div className={styles.midiaSocial}>
                    <h2>Siga-nos no Instagran:</h2>
                        <Link href='https://www.instagram.com/msatacadomake/' target='_blank'>@msatacadomake   <Image src={InstagranIcon} alt='iconInsta'></Image> </Link>
                </div>

                <div className={styles.footerPagamentos}>
                    <h2>Pagamentos</h2>
                    <Image src={Cards} alt='iconInsta'></Image>
                </div>
              
            </div>
            <hr/>
            <p> Todos os direitos reservados</p>   
        </footer>
        
  );
}