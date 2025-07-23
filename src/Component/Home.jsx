
import HeroSection from "./HeroSection"
import CakesAndPastries from './CakesAndPastries';
import ShakesAndSmoothies from './ShakesAndSmoothies';
import IceCream from './IceCream';
import HealthyWraps from './HealthyWraps';
import Crepes from './Crepes';
import Header from './Header';
import Category from './Category';
import Product from './Product';
import Gallery from './Gallery';
import Footer from './Footer';
import Banner from './Bottom-Banner'

const Home = () => {
  return (
   <div>
    <Header />
      <HeroSection />
      <Category />
            <CakesAndPastries />
            <Product />
<section id="gallery">
        <Gallery />
      </section>
            <ShakesAndSmoothies />
            <HealthyWraps />
            <Crepes />
            <IceCream />
            <Banner />
            <Footer />

    

    </div>
  )
}

export default Home
