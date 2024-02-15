import Ofertas from '@/componentes/Home/slideOfertas/ofertas'
import Banner from '@/componentes/Home/bannerDeOfertas/banner'
import Location from '@/componentes/Home/sectionLocation/location'
import CapasProducts from '@/componentes/Home/capasDepartamentos/capasProducts'

export default function Home() {
 
  return (
    <main>
      <Banner/>
      <CapasProducts/>
      <Ofertas/>
      <Location/>
    </main>
  )
}

