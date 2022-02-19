import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Destaques from '../components/Destaques';
import Newsletter from '../components/Newsletter';
import SocialSection from '../components/SocialSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Destaques />
      <Newsletter />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default Home;