import Image from 'next/image';
import styles from './header.module.css'
import Logo from './images/LogoMS.png';
import MenuDesktop from './MenuDesktop';
import MobileComponente from './MobileComponent';
import Link from 'next/link';
import CartCompras from './CartCompras';
import BarraLoading from '@/componentes/ProgressBar/barraLoading';
import InputSearch from './InputSearch';


export default function Header() {

  return (
    <>
      <BarraLoading/>
      
      <div className={styles.Header}>
      
        <div className={styles.Logo}>
            <Link href='/'>
              <Image src={Logo} alt='imageLogo'></Image>
            </Link>
        </div>
      
        <div className={styles.Menu}>
            
          <MenuDesktop/>

          <MobileComponente/>
          
          <CartCompras/>

          <InputSearch/>
          </div> 
      </div>  
    </>
  
  );
}

// ate entao o search é apenas ilustrativo devido a api n fornecer endpoints para searchs.

