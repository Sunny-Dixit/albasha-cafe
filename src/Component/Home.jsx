import HeroSection from './HeroSection';
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
import Banner from './Bottom-Banner';
import PopularItems from './PopularItems';

const Home = () => {
  return (
    <div className="relative z-0 bg-white">
      <Header />

      {/* If you comment this out, still works fine due to proper z-index and background */}
      <HeroSection />

      {/* Main content wrapper with z-10 */}
      <div className="relative z-10 bg-white">
        <Category />
        <CakesAndPastries />
        <PopularItems />
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
    </div>
  );
};

export default Home;
